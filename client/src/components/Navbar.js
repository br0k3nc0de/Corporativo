import React, { Component } from 'react'
import { Nav, Navbar, Form, Button } from 'react-bootstrap';

class NavBar extends Component{

    render(){
        let Style = {
            width: "100%"
        }

        return(
          <Navbar className="navbar" bg="dark" variant="dark">
            <Navbar.Brand href="/">Corporativo Fiscal Y Contable </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/services">Servicios</Nav.Link>
                <Nav.Link href="/contact">Contactanos</Nav.Link>
              </Nav>
              <Form inline>
                <Button variant="outline-info" href="/login">Ingresar</Button>
              </Form>
        </Navbar>
        )
    }

}
    

export default NavBar;