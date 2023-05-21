import React from 'react';
import babka from '../image/images.jpeg'
import { Container, Row, Card, Button, Form, CardGroup} from 'react-bootstrap';

const User = () => {

    return (
        <>
        <Container>
            <h1>User</h1>
            <Form>
                <Row>
                        проверенное
                        <CardGroup>
                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    новенькое 
                    <CardGroup>
                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        нравится остальным
                        <CardGroup>
                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{width: "18rem"}}>
                                <Card.Img variant='top' src={babka}/>
                                <Card.Body>
                                    <Card.Title>первое мероприятие</Card.Title>
                                    <Card.Text>описание</Card.Text>
                                    <Button variant='primary'>Выбрать</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                </Row>
            </Form>
        </Container>
    
        </>
            
            // <Link>Home</Link>

            // <Link >Opros</Link>
    );
};

export default User;