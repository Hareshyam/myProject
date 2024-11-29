import React, { useState } from "react";
import { Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';

import LoginPage from "./login";
import SignupPage from "./singnup";
import Header from "../../global/header";

const Home = (props) => {

    const [key, setKey] = useState('login');

    const onClickHendlerBySignInSignUp = () => {
        if (key == "login") {
            setKey("signup");
        } else {
            setKey("login");
        }
    }

    return (
        <>
            <Header title={`Login Page`} headerType={props.headerType} />
            <Container fluid>
                <Row style={{ margin: "10px" }}>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <Col md={12}><h2>Welcome to login/signUp</h2></Col>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="login" title="LOGIN" style={{ width: "100%" }}>
                                <LoginPage />
                            </Tab>
                            <Tab eventKey="signup" title="SIGNUP" style={{ width: "100%" }}>
                                <SignupPage setKey={setKey} />
                            </Tab>
                        </Tabs>
                        <Col md={12} style={{ marginTop: "20px" }}>Don't have an account? <span onClick={() => onClickHendlerBySignInSignUp()} style={{ padding: "10px", cursor: "pointer", color: "blue" }}>{key === "signup" ? "Sign In" : "Sign Up"}</span></Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;