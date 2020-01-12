import React, { Component } from "react";
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

import Negocio1 from './../img/negocios1.jpg'
import Negocio2 from './../img/negocios2.jpg'
import Negocio3 from './../img/negocios3.jpg'
import Conta1 from './../img/conta1.jpg'
import Conta2 from './../img/conta2.jpg'
import Conta3 from './../img/conta3.jpg'

import './../css/Home.css'
import { Container, Card, CardColumns, CardDeck } from "react-bootstrap";

class Home extends Component{

    ColumnsCards(){
        return(
            <CardColumns>
            <Card>
                <Card.Img variant="top" src={Conta1} />
                <Card.Body>
                <Card.Title>5 Metodos para llevar finanzas personales</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Img variant="top" src={Conta2} />
                <Card.Body>
                <Card.Title>Como aumentar mis ingresos</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Antes de emp
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card className="text-center">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img src={Conta3} />
            </Card>
            <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
    </CardColumns>
        )
    }

    DeckCard(){
        return(
        <CardDeck className="deck-card">
            <Card bg="info" text="white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Negocio1} />
                <Card.Body>
                <Card.Title>Como ganar dinero en internet</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Negocio2} />
                <Card.Body>
                <Card.Title>Has crecer tu negocio con un pequeño capital</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card bg="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Negocio3} />
                <Card.Body>
                <Card.Title>Negocios y Contratos</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        )
    }

    render(){

        document.title = "Corporativo Fiscal y Contable - Home"

        return(
            <div >
                <NavBar/>
                <Container className="root-container">
                                    
                    {this.ColumnsCards()}

                    {this.DeckCard()}
                </Container>
                <Footer/> 
            </div>

        )
    }

}

export default Home;