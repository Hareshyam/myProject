import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemoveToCardAction, RemoveToCardArrIDAction } from "../../redux/action/productlistAction";

const CardItemListModal = (props) => {

    const dispatch = useDispatch();
    const addToCardData = useSelector((state) => state.addToCardData);

    const DecrementData = (item) => {
        // setCount(count - 1);
        // dispatch(DecrementAction(item))
    }

    const IncrementData = (item) => {
        // setCount(count + 1);
        // dispatch(IncrementAction(item));
     }

     const RemoveToCardHandler = (item, id) =>{
        dispatch(RemoveToCardAction(item));
        dispatch(RemoveToCardArrIDAction(id));
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <Modal id="offerListModal" size="lg"  {...props} className="terms-Conditions-modal">

                <Modal.Header closeButton>
                    <Modal.Title className="position-r">
                        Add To Cart
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body className="red-scrollbar">
                    <Col className="lg">
                        <Row className="mt-2 fontsize-14" >
                            {
                                addToCardData?.map((item, ind) => {
                                    console.log(item)
                                    return (
                                        <Col lg={12} className="py-3 pt-0 border-bottom" key={ind}>
                                            <Row>
                                                <Col lg={4}>
                                                    <img src={item.image} height={200} className="img-fluid"></img>
                                                </Col>

                                                <Col lg={4}>

                                                </Col>

                                                <Col lg={4}>
                                                    <span className="fw-600 me-2">{item.title}</span><br />
                                                    <span className="fw-600 me-2">Rs. {item.price}</span><br />
                                                    <span className="fw-600 me-2">
                                                        <Button onClick={() => DecrementData(item)} disabled="" style={{ margin: "10px" }} variant="primary" className="ml-3">-</Button>
                                                        <Button onClick={() => IncrementData(item)} variant="primary" >+</Button>
                                                    </span>
                                                    <span><Button onClick={()=>RemoveToCardHandler(item, item.id)} variant="danger" >Remove</Button></span>
                                                </Col>
                                                <Col lg={12}>
                                                    <p>{item.description}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default CardItemListModal;