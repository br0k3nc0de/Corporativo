import React, { Component } from "react";
import './../css/Manager.css'
import { Nav, Navbar, Form, Button, Modal } from 'react-bootstrap';
import { CardServices } from './Services'

class NavBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            ModalAdd: false,
            ModalDel: false
        }
    }

    handleShow = () => {
        this.setState({ ModalAdd: true })
    }

    handleClose = () => {
        this.setState({ ModalAdd: false })
    }

    ModalAdd(){
        return(
            <>  
                <Modal show={this.state.ModalAdd} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" >
                    Save Changes
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }

    ModalRem(){
        return(
            <>  
                <Modal show={this.state.ModalAdd} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" >
                    Save Changes
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
                            <Nav.Link className="add-btn" onClick={this.handleShow}>Crear</Nav.Link>
                            <Nav.Link className="upd-btn" onClick={this.handleShow}>Modificar</Nav.Link>
                            <Nav.Link className="rem-btn" >Eliminar</Nav.Link>
                        </Nav>
                    <Form inline>
                        <Button variant="danger" href="/">Cerrar Sesión</Button>
                    </Form>
                </Navbar>
                {this.ModalAdd()}
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
                <CardServices showb="none"/>
            </div>
        )
    }

}

export default Manager;