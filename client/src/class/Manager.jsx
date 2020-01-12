import React, { Component } from "react";
import './../css/Manager.css'
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import { CardServices } from './Services'

class NavBar extends Component{
    render(){
        return(
          <Navbar className="navbar" bg="dark" variant="dark">
            <Navbar.Brand href="/">Service Manager</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link className="add-btn" href="/">Crear</Nav.Link>
                <Nav.Link className="upd-btn" href="/services">Modificar</Nav.Link>
                <Nav.Link className="rem-btn" href="/contact">Eliminar</Nav.Link>
              </Nav>
              <Form inline>
              <Button variant="danger" href="/">Cerrar Sesión</Button>
              </Form>
        </Navbar>
        )
    }
}

class Manager extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <NavBar/>
                <CardServices showb="none"/>
            </div>
        )
    }

}

export default Manager;