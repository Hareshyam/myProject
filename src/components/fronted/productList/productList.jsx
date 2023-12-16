import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

import Header from "../../global/header";
import { AddToCardAction, AddToCardArrIDAction, DecrementAction, IncrementAction, ProductListAction, RemoveToCardAction, RemoveToCardArrIDAction } from "../../../redux/action/productlistAction";

const ProductList = (props) => {

    const dispatch = useDispatch();
    const productListData = useSelector((state) => state.productListData);
    const addToCardData = useSelector((state) => state.addToCardData);
    const addToCardArrayId = useSelector((state) => state.addToCardArrayId);


    const [count, setCount] = useState(0);

    const AddToCardHandler = (item, id) => {
        dispatch(AddToCardAction(item));
        dispatch(AddToCardArrIDAction(id));
    }

    const RemoveToCardHandler = (item, id) =>{
        dispatch(RemoveToCardAction(item));
        dispatch(RemoveToCardArrIDAction(id));
    }

    useEffect(() => {
        dispatch(ProductListAction());
    }, [])

    // const DecrementData = (item) => {
    //     setCount(count - 1);
    //     dispatch(DecrementAction(item))
    // }

    // const IncrementData = (item) => {
    //     setCount(count + 1);
    //     dispatch(IncrementAction(item));
    // }
    return (
        <>
            <Header title={`SHOP/LANE`} headerType={props.headerType} />
            <Container fluid>


                <Row style={{ margin: "10px" }}>
                    <div className="App">
                        <Container className='p-4'>
                            <Row>
                                {
                                    productListData.map((item, ind) => {
                                        return (
                                            <Col md="4" className="mt-3" key={ind}>
                                                <Card>
                                                    <div>
                                                        <Card.Img className="img-fluid" variant="top" src={item.image} />
                                                    </div>
                                                    <Card.Body style={{ borderTop: "0.5px solid black" }}>
                                                        <Card.Title>{item.category}</Card.Title>
                                                        <Card.Text>{item.title}</Card.Text>
                                                        <div className="d-flex" style={{ marginTop: "12px" }}>
                                                            <div>
                                                                <span>Rs </span>
                                                                <span>{item.price}</span>
                                                            </div>
                                                            <div className="" style={{ marginLeft: "auto" }}>
                                                                {/* <Button onClick={() => DecrementData(item)} disabled={count === 0} style={{ margin: "10px" }} variant="primary" className="ml-3">-</Button>
                                                                <Button onClick={() => IncrementData(item)} variant="primary" >+</Button> */}
                                                                {
                                                                    addToCardArrayId.includes(item.id) ?
                                                                        <Button onClick={() => RemoveToCardHandler(item, item.id)} variant="danger" >Remove To Card</Button>
                                                                        :
                                                                        <Button onClick={() => AddToCardHandler(item, item.id)} variant="primary" >Add To Card</Button>
                                                                }
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ProductList;