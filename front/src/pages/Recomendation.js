import { React, useEffect, useState }  from 'react';
import babka from '../image/images.jpeg'
import {Container, Row, Form, CardGroup, InputGroup, Button} from 'react-bootstrap';
import RecomendationCard from "../components/RecomendationCard";
import "../styles/Opros.css"
import {FaSearch} from "react-icons/fa";
import {TEST_EVENT} from "../utils/consts";
import { showEvents } from '../action/showEvents';
import { useSelector, useDispatch } from 'react-redux';
import { authUser } from '../action/auth';

const Recomendation = () => {
    const dispatch = useDispatch()
    const events = useSelector( state => state.events )
    const auth = useSelector(state => state.authTest)
    const [search, setSearch] = useState('')
    useEffect(() => { //при обновлении строницы загружаем инфу по карточке  зависимости от номера
        dispatch(showEvents(1));
        dispatch(authUser(localStorage.getItem('fio'), localStorage.getItem('birthDate'))) // хард код для авторизации
      }, []);
    if (auth.grand_exist == true) {
        return (
            <>
                <Row>
                <InputGroup className={'mt-4'} style={{marginLeft: '25%', width: '50%'}} size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">
                        <FaSearch/>
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder={'Введите код мероприятия'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className={'input-group-append'}>
                        <Button variant='primary'
                                size={"lg"}
                                onClick={() => {dispatch(showEvents(search))}}>Искать</Button> 
                                <h1>{events.description_event}</h1>
                    </div>
                    <div className={'input-group-append'}></div>
                </InputGroup>


                </Row>
            <Container>
                <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                <Form>
                    <Row>
                            <h3 className={'text-center mt-4'}>проверенное</h3>
                            <CardGroup className='card-group mt-3'>
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
                        <CardGroup className='card-group mt-3'>
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
                            <CardGroup className='card-group mt-3'>
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
    } else {
        return (
            <div>lox {localStorage.getItem('isAuth')}</div>
        );
    }
};

export default Recomendation;