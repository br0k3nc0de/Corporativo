import React, { Component } from "react";
import './../css/Manager.css'
import { Nav, Navbar, Form, Button, Modal } from 'react-bootstrap';
import { CardServices } from './Services'
import {SERVER_URL} from './../../src/config'

class NavBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            Service: '',
            ModalAdd: false,
            ModalDel: false,
            ModalUpd: false,
            read: true,
            Valid: true
        }
        this.imgadd = React.createRef()
        this.nameadd = React.createRef()
        this.descadd = React.createRef()

        this.oldname = React.createRef()
        this.imgupd = React.createRef()
        this.nameupd = React.createRef()
        this.descupd = React.createRef()

        this.handleAdd = this.handleAdd.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleUpd = this.handleUpd.bind(this)
        this.handleDel = this.handleDel.bind(this)
    
    }

    handleShow = (e,target) => {
        switch(target){

            case 'Add':
                this.setState({ ModalAdd: true})
            break;

            case 'Upd': 
                this.setState({ ModalUpd: true})
            break;

            case 'Del':
                this.setState({ ModalDel: true})
            break;

            default:
                alert('esto no debe pasar: SHOW')
            break;

        }
    }

    handleClose = (e,target) => {
        switch(target){

            case 'Add':
                this.setState({ ModalAdd: false})
            break;

            case 'Upd':
                
                this.setState({ ModalUpd: false})
            break;

            case 'Del':
                this.setState({ ModalDel: false})
            break;

            default:
                alert('esto no debe pasar: CLOSE')
            break;
            
        }
        this.setState({ 's' : true })
    }

    handleAdd () {
        let demoService = {
            image : this.imgadd.current.value ,
            name : this.nameadd.current.value ,
            description: this.descadd.current.value
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(demoService),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(`${SERVER_URL}/services/add`,options)
        .then( (response) => {

            if(response.ok){
                window.location.reload();
                alert('Se guardo correctamente el servicio')
            }else{
                 alert('Hubo un problema')
            }
            
        })
    }

    handleUpd () {
        let demoService = {
            image : this.imgupd.current.value ,
            name : this.nameupd.current.value ,
            description: this.descupd.current.value
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(demoService),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(`${SERVER_URL}/services/update?oldname=${this.oldname.current.value}` ,options)
        .then( (response) => {

            if(response.ok){
                window.location.reload();
                alert('Se guardo correctamente el servicio')
            }else{
                 alert('Hubo un problema')
            }
            
        })
    }

    handleDel () {
        let options = {
            method: 'DELETE',
        }
        fetch(`${SERVER_URL}/services/delete?service=${this.oldname.current.value}` ,options)
        .then( (response) => {
            if(response.ok){
                window.location.reload();
                alert('Se eliminado correctamente el servicio')
            }else{
                 alert('Hubo un problema')
            }
            
        })
    }

    handleCheck(){
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(`${SERVER_URL}/services/get?service=${this.oldname.current.value}` ,options)
        .then( (rep) => rep.json())
        .then( (response) => {
            console.log(response)
            if(response !== null){
                this.setState({ 
                   Service: response,
                   read: false
                })
            }else{
                 alert('Hubo un problema')
            }
            
        })
    }

    /* Modal */

    ModalAdd(){
        return(
            <>  
                <Modal show={this.state.ModalAdd} onHide={(e) => this.handleClose(e,'Add')}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="nameadd">
                        <Form.Label>Nombre de Servicio</Form.Label>
                        <Form.Control ref={ this.nameadd } type="text" placeholder="Mantenimineto, Contabilidad, ETC" />
                    </Form.Group>

                    <Form.Group controlId="imageadd">
                        <Form.Label>URL Imagen:</Form.Label>
                        <Form.Control ref={ this.imgadd } type="text" placeholder="https://contabilidad.xyz/wp-content/uploads/2019/01/im1.jpg" />
                    </Form.Group>
                    
                    <Form.Group controlId="description-add">
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control ref={ this.descadd } type="text" as="textarea" placeholder="Describe el servicio" />
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => this.handleClose(e,'Add')}>
                    Cerrar
                    </Button>
                    <Button variant="primary" onClick={this.handleAdd}>
                        Guardar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }

    ModalUpd(){
        let { Service, read } = this.state 

        return(
            <>  
                <Modal show={this.state.ModalUpd} onHide={(e) => this.handleClose(e,'Upd')}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifcar Servcio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>

                    <Form.Group controlId="service-upd">
                        <Form.Label>Buscar Servicio</Form.Label>
                        <Form.Control ref={ this.oldname } type="text" placeholder="Mantenimineto, Contabilidad, ETC"
                        readOnly={!read} />
                        <Button onClick={this.handleCheck}>
                            Verificar
                        </Button>
                    </Form.Group>

                    <Form.Group controlId="service-upd">
                        <Form.Label>Nuevo Nombre de Servicio</Form.Label>
                        <Form.Control ref={ this.nameupd } type="text" placeholder="Mantenimineto, Contabilidad, ETC"
                        defaultValue={Service.name}
                        readOnly={read}
                         />
                    </Form.Group>

                    <Form.Group controlId="img-upd" disabled={this.state.Valid}>
                        <Form.Label>URL Imagen:</Form.Label>
                        <Form.Control ref={ this.imgupd } type="text" placeholder="https://contabilidad.xyz/wp-content/uploads/2019/01/im1.jpg"
                        defaultValue={Service.image}
                        readOnly={read}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword" disabled={this.state.Valid}>
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control ref={ this.descupd } type="text" as="textarea" placeholder="Describe el servicio" 
                        defaultValue={Service.description}
                        readOnly={read}
                        />
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => this.handleClose(e,'Upd')}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleUpd} >
                        Guardar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }

    ModalRem(){
        let { Service, read } = this.state
        return(
            <>  
                <Modal show={this.state.ModalDel} onHide={(e) => this.handleClose(e,'Del')}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre de Servicio</Form.Label>
                            <Form.Control ref={ this.oldname } type="text" placeholder="Mantenimineto, Contabilidad, ETC"
                            readOnly={!read} 
                            />
                            <Button onClick={this.handleCheck}>
                                Verificar
                            </Button>
                            <Form.Text className="text-danger" as="b" align="justify"> Esto no puedo ser revertido. VERIFICA LA INFORMACIÓN ANTES DE CONTINUAR</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="img-del">
                            <Form.Label>URL Imagen:</Form.Label>
                            <Form.Control type="text" placeholder="Solo Lectura" disabled
                            defaultValue={Service.image}/>
                        </Form.Group>
                        
                        <Form.Group controlId="desc-del">
                            <Form.Label>Descripcion:</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Solo lectura" disabled
                            defaultValue={Service.description}/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => this.handleClose(e,'Del')}>
                    Close
                    </Button>
                    <Button variant="danger" onClick={this.handleDel} >
                        Eliminar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }

    render(){
        return(
            <div>
                <Navbar className="navbar" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Service Manager</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link className="add-btn" onClick={(e) => this.handleShow(e,'Add')}>Crear</Nav.Link>
                            <Nav.Link className="upd-btn" onClick={(e) => this.handleShow(e,'Upd')}>Modificar</Nav.Link>
                            <Nav.Link className="rem-btn" onClick={(e) => this.handleShow(e,'Del')}>Eliminar</Nav.Link>
                        </Nav>
                    <Form inline>
                        <Button variant="danger" href="/">Cerrar Sesión</Button>
                    </Form>
                </Navbar>
                {this.ModalAdd()}
                {this.ModalUpd()}
                {this.ModalRem()}
            </div>
            
            
        )
    }
}

class Manager extends Component{

    render(){
        document.title = 'Services Manager'
        return(
            <div>
                <NavBar/>
                <CardServices 
                key={'manager-services'}
                hiddenBtns={true} />
            </div>
        )
    }

}

export default Manager;