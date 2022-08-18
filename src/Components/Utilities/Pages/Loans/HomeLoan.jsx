import React,{useState} from 'react';
import {Card, Row, Col, Container, Form, InputGroup} from 'react-bootstrap';
import { toWords } from 'number-to-words';

const HomeLoan = () => {

let [parange,setPaRange] = useState({min:0,max:1000});



  return (
    <>
        <section className='home-loan p-3'>
            <Container fluid>
                <Row>
                    <Col sm={8}>
                        <Card>
                            <Card.Title className='text-primary m-3'>Home Loan</Card.Title>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row} className='mb-3'>
                                        <Form.Label column sm={3} className='text-dark'>Home Loan Amount</Form.Label>
                                        <Col sm={8}>
                                            <InputGroup className="mb-2"><Form.Control type='number' value={parange} onChange={(e)=>setPaRange(e.target.value)} name='principal' placeholder='Principal Amount'/> <InputGroup.Text>₹</InputGroup.Text></InputGroup>
                                        </Col>                                    
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Range step={100000} min={0} max={1000000} name='paRange' value={parange} onChange={(e)=>setPaRange(e.target.value)} />
                                        <p>{parange > 0 ? toWords(parange).toUpperCase() : '' }</p>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Home Loan</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default HomeLoan