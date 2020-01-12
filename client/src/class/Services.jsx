import React, { Component } from 'react';
import {  Card, CardGroup, Container, Button } from 'react-bootstrap';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer';

class CardItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            image: props.image,
            name: props.name,
            description: props.description,
            created: props.created,
            showBtn: props.showb
        }
    }

    render(){
        const { image, name, description, created, showBtn } = this.state 

        let styleBT = {
            display: showBtn
        }

        return(
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ultima vez actualizado: <b>{created}</b> </small>
                    <Button variant="success" align="right" href="/contact" style={styleBT}>Contactar</Button>
                </Card.Footer>
            </Card>
        )
    }
}

export class CardServices extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            services: [],
            showb: props.showb
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

            <CardItem key={service.name}
                image={service.image}
                name={service.name}
                description={service.description}
                created={service.created}
                showBtn={this.state.showb}
            />
        )

        return allRowServices;
    }

    render(){
        return(
            <Container className="root-container">    
                <CardGroup>
                    {this.AllData()}
                </CardGroup>
            </Container>
        )
    }

}

class Services extends Component{

    render(){     
        document.title = "Corporativo Fiscal y Contable - Nuestros Servicios" 
        
        return(
            <div>
                <NavBar/>
            
                <CardServices showb="show"/>
                
                <Footer/>
            </div>
            
        )
    }

}

export default Services;
