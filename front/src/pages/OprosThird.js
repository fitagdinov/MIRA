import React from 'react';
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import babka from '../image/train.png'
const OprosThird = () => {
 
    return (
        <Container>
            <h1>Opros_3</h1>
            <Form>
                <Row>
                    <Form.Label>вопрос 1</Form.Label>
                    <Form.Label>вопрос 2</Form.Label>
                    <Form.Label>вопрос 3</Form.Label>
                    
                    <Col>
                        <Card style={{width: "18rem"}}>
                            <Card.Img variant='top' src={babka}/>
                            <Card.Body>
                                <Card.Title>первое мероприятие</Card.Title>
                                <Card.Text>описание</Card.Text>
                                <Button variant='primary'>Выбрать</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: "18rem"}}>
                            <Card.Img variant='top' src={babka}/>
                            <Card.Body>
                                <Card.Title>второе мероприятие</Card.Title>
                                <Card.Text>описание</Card.Text>
                                <Button variant='primary'>Выбрать</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: "18rem"}}>
                            <Card.Img variant='top' src={babka}/>
                            <Card.Body>
                                <Card.Title>третье мероприятие</Card.Title>
                                <Card.Text>описание</Card.Text>
                                <Button variant='primary'>Выбрать</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default OprosThird;