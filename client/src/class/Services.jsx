import React, { Component } from 'react';
import {  Card, CardGroup, Container } from 'react-bootstrap';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer';

class CardItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            image: props.image,
            name: props.name,
            description: props.description,
            price: props.price
        }
    }

    render(){
        const { image, name, description, price } = this.state 
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
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
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

            <CardItem key={service.name}
                image={service.image}
                name={service.name}
                description={service.description}
                price={service.price}
            />
        )

        return allRowServices;
    }

    Tabla(){
        return(
            <CardGroup>
                {this.AllData()}
            </CardGroup>
        )
    }

    render(){
        const { access } = this.state
        document.title = "Buffet Juridico - " + access
        return(
            <div>
                <NavBar/>

                <Container className="root-container">                     
                    {this.Tabla()}
                </Container>

                <Footer/>
            </div>
            
        )
    }

}

export default Services;
