import React, { Component } from 'react';

import "./../css/Login.css"
import {  Form, Button, Row, Col } from 'react-bootstrap';

class Login extends Component{

    render(){
        return(
            <div className="container center-h center-v">    
                    
                <Form className="login-form"> 
                    <p align={'center'}><b>Iniciar Sesión</b></p>                   
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control type="email" placeholder="Username" />
                        <Form.Text className="text-muted">
                        <p className="label-share"> No compartas tu usuario con nadie mas. </p>
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
                            Entrar
                        </Button>
                      </Col>  
                      <Col>
                        <Button variant="success" type="submit">
                            Registrarme
                        </Button>
                      </Col>    
                    </Row>
                    
                </Form>
            </div>
                
               
          
        )
    }

}
export default Login;
