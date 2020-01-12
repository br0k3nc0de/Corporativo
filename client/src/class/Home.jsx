import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Table, Button, ButtonGroup } from 'react-bootstrap';
import {SERVER_URL} from './config.js'

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            access: 'default',
            username: 'root',
            services: null
        }
        this.FetchData()

    }

    FetchData(){
        fetch(SERVER_URL+'/list')
        .then(response => response.json())         
        .then( (list)=> {
             this.setState({ services: Object.values(list)})
        })
        .catch((err)=>{ alert("no services response: "+err); });  
    }

    function Row(props) {
        render(){
            return(
                <tr>
                    <th>props.id</th>
                    <th>props.name</th>
                    <th>props.description</th>
                    <th>props.price</th>
                    <th></th>
                </tr>
            )
        }
        
    }

    AllData(){
        let allRowServices = this.state.services.map((service) => 
            (
                <Row key={service.name}
                    id={service.id}
                    name={service.name}
                    description={service.description}
                    price={service.price}
                />
            )
        )
    }

    Tabla(){
        return(
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Servicio</th>
                    <th>Descripcion</th>
                    <th>Costos</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTabla()}
                </tbody>
            </Table>
        )
    }

    render(){
        const { access } = this.state
        document.title = "Buffet Juridico - " + access
        return(
            <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Buffet juridico</Navbar.Brand>
                <Nav className="mr-auto">
                <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Agregar Servicio</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Modificar Servicio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Eliminar Servicio</NavDropdown.Item>
            </NavDropdown>
                </Nav>              
            </Navbar>
            {this.Tabla()}

            </div>
        )
    }

}
export default Home;
