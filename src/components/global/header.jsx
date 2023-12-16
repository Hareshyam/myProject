import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
const style = {
    backgroundColor: "#03A9F4",
    height: "57px",
    width: "100%"
}
const Header = () => {

    return (
        <header style={style}>
            <Container fluid>
                <Row>
                    <Col md={12} className="header">
                        <h4 style={{lineHeight: "50px", textAlign: "center"}}>Login/Signup</h4>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;