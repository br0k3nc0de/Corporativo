import React, { Component } from 'react';
import {  Table, Button, ButtonGroup, Container } from 'react-bootstrap';
import NavBar from '../components/Navbar'

class Row extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price
        }
    }

    render(){
        const { id, name, description, price } = this.state 
        return(
            <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{description}</th>
            <th>{price}</th>
            <th>
            <ButtonGroup className="mr-1" aria-label="First group">
                <Button>Ver</Button>
                <Button>Modificar</Button>
                <Button>Eliminar</Button>
                <Button>Detalles</Button>
            </ButtonGroup>

            </th>
        </tr>
        )
    }
}

class Services extends Component{

    constructor(props){
        super(props)
        this.state = {
            access: 'default',
            username: 'root',
            services: []
        }
        this.FetchData()
    }

    FetchData(){
        fetch('http://localhost:9000/services/all')
        .then(response => response.json())         
        .then( (list)=> {
            this.setState({ services: list.services })
        })
        .catch((err)=>{ alert("no services response: "+err); });  
    }

   

    AllData(){
        let allRowServices = this.state.services.map((service) =>

            <Row key={service.id+service.name}
                id={service.id}
                name={service.name}
                description={service.description}
                price={service.price}
            />
        )

        return allRowServices;
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
                    {this.AllData()}
                </tbody>
            </Table>
        )
    }

    render(){
        const { access } = this.state
        document.title = "Buffet Juridico - " + access
        return(
            <Container>              
                <NavBar></NavBar>
                {this.Tabla()}
            </Container>
        )
    }

}
export default Services;
