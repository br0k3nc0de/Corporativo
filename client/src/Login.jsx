import React, { Component } from 'react';

import "./Login.css"
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

class Login extends Component{

    render(){
        return(
            <Container className="login-form">    
                    <p align={'center'}>Iniciar Sesión</p>
                <Form>                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        No compartas tu usuario con nadie mas.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Constraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>

                    <Row>
                      <Col>
                        <Button variant="primary" type="submit">
                            Iniciar Sesión
                        </Button>
                      </Col>  
                      <Col>
                        <Button variant="success" type="submit">
                            Registrarme
                        </Button>
                      </Col>    
                    </Row>
                    
                </Form>
            </Container>
                
               
          
        )
    }

}
export default Login;
