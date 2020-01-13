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
            updated: props.updated,
            notShow: props.hidden
        }
    }

    render(){
        const { image, name, description, created, notShow } = this.state 

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
                    <Button variant="success" align="right" href="/contact" hidden={notShow}>Contactar</Button>
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
            show: props.hiddenBtns
        }
        this.FetchData()
    }

    FetchData(){
        fetch('http://3.18.113.46:9000/services/all')
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
                updated={service.updated}
                hidden={this.state.show}
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
            
                <CardServices 
                key={'services'}
                hiddenBtns={false}/>
                
                <Footer/>
            </div>
            
        )
    }

}

export default Services;
