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
                        <Button variant='success'
                                size={"lg"}
                                onClick={() => {dispatch(showEvents(search))}}>Искать</Button>
                        <h1> {events.description_event} </h1>
                    </div>
                </InputGroup>


            </Row>
            <Container>
                <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                <Form>
                    <Row>
                        <h2 className={'text-center'}>Рекомендовано</h2>
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
};

export default Recomendation;