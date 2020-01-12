import React, { Component } from "react";
import "./../css/Contact.css"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container,Form } from "react-bootstrap";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const styleMap = {
    width: '81%',
    height: '40%'
}

class Contact extends Component{

    Formulario(){

        const styleTA = {
            heigth: "40px"
        }

        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre Completo:</Form.Label>
                    <Form.Control type="email" placeholder="nombre + 2nombre + apellidos" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Correo Electronico:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Asunto:</Form.Label>
                    <Form.Control type="text" placeholder="Asunto a tratar" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Mensaje:</Form.Label>
                    <Form.Control as="textarea" style={styleTA} placeholder="Escribe tu mensaje..."/>
                </Form.Group>
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
                        {this.Mapa()}
                    </div>             
                </Container>

                <Footer/>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD8-xvcdr5jrU97iObB-2kn95La_zBsJqw")
  })(Contact)