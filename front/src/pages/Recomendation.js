import React from 'react';
import babka from '../image/images.jpeg'
import { Container, Row, Card, Button, Form, CardGroup} from 'react-bootstrap';
import RecomendationCard from "../components/RecomendationCard";
import "../styles/Opros.css"

const Recomendation = () => {

    return (
        <>
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