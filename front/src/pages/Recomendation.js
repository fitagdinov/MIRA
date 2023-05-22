import React from 'react';
import babka from '../image/images.jpeg'
import {Container, Row, Form, CardGroup, InputGroup, Button} from 'react-bootstrap';
import RecomendationCard from "../components/RecomendationCard";
import "../styles/Opros.css"
import {FaSearch} from "react-icons/fa";

const Recomendation = () => {

    return (
        <>
            <Row>
            <InputGroup className={'mt-4'} style={{marginLeft: '25%', width: '50%'}} size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg"><FaSearch/></InputGroup.Text>
                <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder={'Введите код мероприятия'}
                />
                <div className={'input-group-append'}><Button variant='primary' size={"lg"}>Искать</Button> </div>
            </InputGroup>


            </Row>
        <Container>
            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <Form>
                <Row>
                        <h3 className={'text-center mt-4'}>проверенное</h3>
                        <CardGroup class='card-group mt-3'>
                            <RecomendationCard title={'первое мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               href={'#'}
                            />
                            <RecomendationCard title={'второе мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               href={'#'}
                            />

                            <RecomendationCard title={'третье мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               href={'#'}
                            />
                        </CardGroup>
                    <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                    <h3 className={'text-center mt-4'}>новенькое</h3>
                    <CardGroup class='card-group mt-3'>
                        <RecomendationCard title={'первое мероприятие'}
                                           description={'описание'}
                                           image={babka}
                                           href={'#'}
                        />
                        <RecomendationCard title={'второе мероприятие'}
                                           description={'описание'}
                                           image={babka}
                                           href={'#'}
                        />

                        <RecomendationCard title={'третье мероприятие'}
                                           description={'описание'}
                                           image={babka}
                                           href={'#'}
                        />
                        </CardGroup>
                    <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                    <h3 className={'text-center mt-4'}>нравится остальным</h3>
                        <CardGroup class='card-group mt-3'>
                            <RecomendationCard title={'первое мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               href={'#'}
                            />
                            <RecomendationCard title={'второе мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               href={'#'}
                            />

                            <RecomendationCard title={'третье мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               href={'#'}
                            />
                        </CardGroup>
                </Row>
            </Form>
        </Container>

        </>

            // <Link>Home</Link>

            // <Link >Opros</Link>
    );
};

export default Recomendation;