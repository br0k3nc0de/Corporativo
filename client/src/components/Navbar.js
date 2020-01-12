import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavBar extends Component{

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Buffet juridico</Navbar.Brand>
                <Nav className="mr-auto">
                <NavDropdown key='0' title="Servicios" id="collasible-nav-dropdown">
                <NavDropdown.Item key='1' href="#action/3.1">Agregar Servicio</NavDropdown.Item>
                <NavDropdown.Item key='2' href="#action/3.2">Modificar Servicio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item key='3' href="#action/3.3">Eliminar Servicio</NavDropdown.Item>
            </NavDropdown>
                </Nav>              
            </Navbar>
        )
    }

}
    

export default NavBar;