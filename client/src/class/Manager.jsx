import React, { Component } from "react";
import './../css/Manager.css'
import { Nav, Navbar, Form, Button, Modal } from 'react-bootstrap';
import { CardServices } from './Services'

class NavBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            ModalAdd: false,
            ModalDel: false,
            ModalUpd: false,
            Valid: true
        }
        this.imgadd = React.createRef()
        this.nameadd = React.createRef()
        this.descadd = React.createRef()
        this.handleAdd = this.handleAdd.bind(this)
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

        fetch('http://localhost:9000/services/add',options)
        .then( (response) => {

            if(response.ok){
                window.location.reload();
                alert('Se guardo correctamente el servicio')
            }else{
                 alert('Hubo un problema')
            }
            
        })
    }

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
        return(
            <>  
                <Modal show={this.state.ModalUpd} onHide={(e) => this.handleClose(e,'Upd')}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifcar Servcio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="service-upd">
                        <Form.Label>Nombre de Servicio</Form.Label>
                        <Form.Control type="text" placeholder="Mantenimineto, Contabilidad, ETC" />
                    </Form.Group>

                    <Form.Group controlId="img-upd" disabled={this.state.Valid}>
                        <Form.Label>URL Imagen:</Form.Label>
                        <Form.Control type="text" placeholder="https://contabilidad.xyz/wp-content/uploads/2019/01/im1.jpg" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword" disabled={this.state.Valid}>
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control type="text" as="textarea" placeholder="Describe el servicio" />
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => this.handleClose(e,'Upd')}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Guardar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }

    ModalRem(){
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
                            <Form.Control type="text" placeholder="Mantenimineto, Contabilidad, ETC" />
                            <Form.Text className="text-danger" as="b" align="justify"> Esto no puedo ser revertido. VERIFICA LA INFORMACIÓN ANTES DE CONTINUAR</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="img-del">
                            <Form.Label>URL Imagen:</Form.Label>
                            <Form.Control type="text" placeholder="Solo Lectura" disabled/>
                        </Form.Group>
                        
                        <Form.Group controlId="desc-del">
                            <Form.Label>Descripcion:</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Solo lectura" disabled/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => this.handleClose(e,'Del')}>
                    Close
                    </Button>
                    <Button variant="danger" >
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