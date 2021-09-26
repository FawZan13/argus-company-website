import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Pokemon.css'

const Pokemon = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Pokemon;