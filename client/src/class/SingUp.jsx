import React, { Component } from 'react';
import {  Form, Button, Row } from 'react-bootstrap';
import "./../css/Login.css"
import {SERVER_URL} from './../../src/config'

class Singup extends Component{

    constructor (props) {
        super(props);
        this.state = {
          name : '',
          lastname: '',
          surname: '',
          fechaNac: '',
          email: '',
          username: '',
          password: '',
          passconf: ''
        }
    }


    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    saveUser(userdata){
        console.log(userdata)
     
        let options = {
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(userdata),           
        }

        fetch(`${SERVER_URL}/users/singup`,options)
        .then(response => response.text())         
        .then( (user)=> {
            try{
                JSON.parse(user)
                alert("Se ha agregado exitosamente al usuario.")
                document.location.href = '/login'
            }catch(excep){
                alert("problems")
            }
           
        })
        .catch((err)=>{ alert("no services response: "+err); });
    }

    handlesingup = (e) => {
          e.preventDefault()
        let userdate = {
             name : document.getElementById('name').value,
             lastname : document.getElementById('lastname').value,
             surname : document.getElementById('surname').value,
             "fecha-nac" : document.getElementById('fecha-nac').value,
             email : document.getElementById('email').value,
             username : document.getElementById('username').value,
             password : document.getElementById('password').value,
        }

        let pass = document.getElementById('password').value
        let conf = document.getElementById('password-confirm').value

        if( pass === conf)
            this.saveUser(userdate)
        else    
            alert("Verifica los datos")

        
        
    }

    render(){
        
        let {name, lastname, surname, fechaNac, email, username, password, passconf} = this.state

        document.title = "Corporativo Fiscal y Contable - Registrate"

        return(
            <div className="container center-h center-v">    
                    
                <Form className="login-form" onSubmit={this.handlesingup}> 
                    <p align={'center'}><b>Registrarme</b></p>  

                    <Form.Group controlId="name">
                        <Form.Label>* Nombre:</Form.Label>
                        <Form.Control type="text" defaultValue={name} required/>
                    </Form.Group>

                    <Form.Group controlId="lastname">
                        <Form.Label>* Apellido Paterno:</Form.Label>
                        <Form.Control type="text" defaultValue={lastname} required
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="surname">
                        <Form.Label>Apellido Materno:</Form.Label>
                        <Form.Control type="text" defaultValue={surname}
                        />
                    </Form.Group>

                    <Form.Group controlId="fecha-nac">
                        <Form.Label>* Fecha de nacimiento:</Form.Label>
                        <Form.Control type="date" defaultValue={fechaNac} required
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>* Correo Electronico:</Form.Label>
                        <Form.Control type="email" defaultValue={email} required
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="username">
                        <Form.Label>* Nombre de Usuario:</Form.Label>
                        <Form.Control type="text" defaultValue={username} required
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>* Constraseña:</Form.Label>
                        <Form.Control type="password" defaultValue={password} required
                        />
                    </Form.Group>

                    <Form.Group controlId="password-confirm">
                        <Form.Label>* Confirmar Constraseña:</Form.Label>
                        <Form.Control type="password" defaultValue={passconf} required
                        />
                    </Form.Group>

                    <Row>
                        <Button block variant="success" type="submit">
                            Registrarme
                        </Button>  
                    </Row>
                    <br></br>
                    <Row>
                        <Button block variant="primary" as="a" href="/">
                            Regresar
                        </Button>  
                    </Row>
                    
                </Form>
            </div>
                
               
          
        )
    }

}
export default Singup;
