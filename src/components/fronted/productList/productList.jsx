import React, {useState} from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

import Header from "../../global/header";

const ProductList = () => {

    return (
        <Container fluid>

            <Header/>

            <Row style={{margin: "10px"}}>
                <Col md={12}>
                    Product List Data.....!!!
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;