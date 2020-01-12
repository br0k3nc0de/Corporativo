import React, { Component } from 'react'
import { Nav, Navbar, Form, Button } from 'react-bootstrap';

class NavBar extends Component{

    render(){
        return(
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Corporativo Fiscal Y Contable </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Contactanos</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-info" href="/login">Ingresar</Button>
          </Form>
        </Navbar>
        )
    }

}
    

export default NavBar;