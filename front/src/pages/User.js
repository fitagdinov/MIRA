import { React, useEffect }  from 'react';
import babka from '../image/images.jpeg'
import {Container, Row, Form, CardGroup, InputGroup, Button} from 'react-bootstrap';
import RecomendationCard from "../components/RecomendationCard";
import "../styles/Opros.css"
import {FaSearch} from "react-icons/fa";
import {TEST_EVENT} from "../utils/consts";
import { showEvents } from '../action/showEvents';
import { useSelector, useDispatch } from 'react-redux';

const User = () => {
    const dispatch = useDispatch()
    const events = useSelector( state => state.events )
    useEffect(() => { //при обновлении строницы загружаем инфу по карточке  зависимости от вi
        dispatch(showEvents(1));
      }, []);
    
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
                <div className={'input-group-append'}>
                    <Button variant='primary'
                            size={"lg"}
                            onClick={() => {dispatch(showEvents(2))}}
                            >тест мероприятия</Button> </div>
            </InputGroup>


            </Row>
        <Container>
            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <Form>
                <Row>
                        <h3 className={'text-center mt-4'}>проверенное</h3>
                        <CardGroup class='card-group mt-3'>
                            <RecomendationCard title={events.beauty_code_event}
                                               description={events.description_event}
                                               image={babka}
                                               link={TEST_EVENT}
                            />
                            <RecomendationCard title={'второе мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               link={'#'}
                            />

                            <RecomendationCard title={'третье мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               link={'#'}
                            />
                        </CardGroup>
                    <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                    <h3 className={'text-center mt-4'}>новенькое</h3>
                    <CardGroup class='card-group mt-3'>
                        <RecomendationCard title={'первое мероприятие'}
                                           description={'описание'}
                                           image={babka}
                                           link={'#'}
                        />
                        <RecomendationCard title={'второе мероприятие'}
                                           description={'описание'}
                                           image={babka}
                                           link={'#'}
                        />

                        <RecomendationCard title={'третье мероприятие'}
                                           description={'описание'}
                                           image={babka}
                                           link={'#'}
                        />
                        </CardGroup>
                    <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                    <h3 className={'text-center mt-4'}>нравится остальным</h3>
                        <CardGroup class='card-group mt-3'>
                            <RecomendationCard title={'первое мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               link={'#'}
                            />
                            <RecomendationCard title={'второе мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               link={'#'}
                            />

                            <RecomendationCard title={'третье мероприятие'}
                                               description={'описание'}
                                               image={babka}
                                               link={'#'}
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

export default User;