import React, { Component } from "react";
import "./../css/Contact.css"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Form, Button } from "react-bootstrap";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {SERVER_URL} from './../../src/config'

const styleMap = {
    width: '81%',
    height: '40%'
}

class Contact extends Component{

    handleSubmit = (e) => {
    
        let dataMail = {
            fullname: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(dataMail),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(`${SERVER_URL}/email/send`,options)
        .then( (resp) => {
            alert(resp)
            
        })
        e.preventDefault();
        
    }

    Formulario(){

        const styleTA = {
            heigth: "40px"
        }

        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="fullname">
                    <Form.Label>Nombre Completo:</Form.Label>
                    <Form.Control type="text" placeholder="nombre + 2nombre + apellidos" required/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Correo Electronico:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required/>
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Asunto:</Form.Label>
                    <Form.Control type="text" placeholder="Asunto a tratar" required/>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Mensaje:</Form.Label>
                    <Form.Control as="textarea" style={styleTA} placeholder="Escribe tu mensaje..." required/>
                </Form.Group>

                <Button type="submit">Enviar</Button>

            </Form>
        )
    }

    Mapa(){
        return(
            <Map 
        google={this.props.google} zoom={14}
        style={styleMap}
        >
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                {/*<div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>*/}
                
            </InfoWindow>
        </Map>      
        )
    }

    render(){
        return(
            <div>
                <NavBar/>
                <Container >  
                    <div className="root-container">
                        <p className="main-label">
                            Contactanos, Estamos para darte la mejor atencion.
                        </p>
                        {this.Formulario()}
                
                    </div> 
                    {this.Mapa()}            
                </Container>

                <Footer/>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD8-xvcdr5jrU97iObB-2kn95La_zBsJqw")
  })(Contact)