import React, { Component } from 'react';

import "./../css/Login.css"
import {  Form, Button, Row, Col } from 'react-bootstrap';

class Login extends Component{

    CheckData = () => {
        let username = document.getElementById('user').value
        let password = document.getElementById('pass').value

        fetch(`http://localhost:9000/users/login?username=${username}&password=${password}`)
        .then(response => response.text())         
        .then( (user)=> {
            try{
                JSON.parse(user)
                document.location.href = `/manager?username=${username}&password=${password}`
            }catch(excep){
                alert("El usuario/contraseña no son correctos")
            }
           
        })
        .catch((err)=>{ alert("no services response: "+err); });
    }

    render(){
        return(
            <div className="container center-h center-v">    
                    
                <Form className="login-form"> 
                    <p align={'center'}><b>Iniciar Sesión</b></p>                   
                    <Form.Group controlId="user">
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control type="texto" placeholder="Username" />
                        <Form.Text className="text-muted">
                        <p className="label-share"> No compartas tu usuario con nadie mas. </p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="pass">
                        <Form.Label>Constraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>

                    <Row>
                      <Col>
                        <Button variant="primary" onClick={this.CheckData}>
                            Entrar
                        </Button>
                      </Col>  
                      <Col>
                        <Button variant="success" type="submit">
                            Registrarme
                        </Button>
                      </Col>    
                    </Row>
                    
                </Form>
            </div>
                
               
          
        )
    }

}
export default Login;
