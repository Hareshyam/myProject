import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPass = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login clicked');
    };

    const onClickBtn = () => {
        navigate("/");
    }

    return (
        <Container style={{ marginTop: "180px",textAlign: "-webkit-center" }}>
            <Form>
                <Col lg={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ display: "flex" }}>Please Provided Your Registered Email Id to Reset Password.</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Row>
                        <Col lg={6}>
                            <Button style={{ width: "100%", marginTop: "20px" }} variant="primary" type="submit" onClick={handleLogin}>
                                Reset Password
                            </Button>
                        </Col>
                        <Col lg={6}>
                            <Button style={{ width: "100%", marginTop: "20px" }} variant="primary" onClick={onClickBtn}>
                                Login/Signup
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Form>
        </Container>

    )
}

export default ForgotPass;