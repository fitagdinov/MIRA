import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Form,
    InputGroup,
    Row,
    Modal
} from "react-bootstrap";
import {FaHeart, FaSearch} from "react-icons/fa";
import CategorySelector from '../components/CategorySelector'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CardGroup } from 'react-bootstrap';
import RecomendationCard from '../components/RecomendationCard';
import { useState } from 'react';
import { authUser } from '../action/auth';
import { showByBeautyEvent } from '../action/showEvents';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch()
    const byEvent = useSelector(state => state.byTypeEvents)
    const isFetching = useSelector(state => state.byTypeEvents.isFetching)
    const isAuth = useSelector(state => state.authTest)
    const byBeautyEvent = useSelector(state => state.byBeautyEvent)
    const [show, setShow] = useState(false) 
    // const [showOpros, setShowOpros] = useState(false)
    const [search, setSearch] = useState('')
    const [fio, setFio] = useState(101387414) 
    const [birthDate, setBirthDate] = useState('1937-02-17') 
    // const [showOpros, setShowOpros] = useState(false)
    const handleShow = () => setShow(true) 
    const handleClose = () => setShow(false)
    const handleShowOpros = (fio, birthDate) => { // хранит в себе 3 функции
        // setShowOpros(true) // открывает окно "пройдите опрос"
        setShow(false) // закрывает окно авторизации
        dispatch(authUser(fio, birthDate)) // заполняем store таской на закгрузку данных и обновления state
    }
    // useEffect(() => {
    //     const isAuth = localStorage.getItem('isAuth')
    //   }, []);
    // const results = useSelector(state => state.firstAnswer)
    return (

        <div>
            
            <br/><br/>

            <div className={'text-center'}>
                <h1> <FaHeart size={'20px'} style={{color: 'green', marginRight: '10px'}}/>
                    Здесь найдутся занятия по душе
                    <FaHeart size={'20px'} style={{color: 'green', marginLeft: '10px'}}/>
                </h1>
            </div>

            <br/>
            <div className={'text-center'} style={{marginLeft: '25%', width: '50%',fontSize: 22}}>
                <ButtonGroup>
                    <Button variant={'outline-success'}
                            size={'lg'}
                            onClick={handleShow}>
                        <b>Авторизация</b>
                    </Button>
                </ButtonGroup>

                <Modal size={'lg'} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Пожалуйста введите свое ФИО и дату рождения для авторизации
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>ФИО</Form.Label>
                                <Form.Control
                                    className={'name'}
                                    placeholder="ФИО"
                                    value={fio}
                                    onChange={(e) => setFio(e.target.value)}/>

                            </Form.Group>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Дата рождения</Form.Label>
                                <Form.Control
                                    className={'date'}
                                    placeholder="Дата рождения"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer >
                        <Button
                            className={'mx-auto'}
                            variant={'success'}
                            href='/QA'
                            onClick={() => {handleShowOpros(fio, birthDate);}} // при нажатии вызываем функцию происходит действи (описано выше)
                        >
                            Готово
                        </Button>
                    </Modal.Footer>
                </Modal>

                <br/>
                <br/>

                <h4 style={{color: '#363636'}}>
                    Авторизуйтесь, чтобы получить весь спектр возможностей
                    и воспользуйтесь личными рекомендациями
                </h4>
            </div>
            <br/>

            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <div className={'text-center'} style={{marginLeft: '15%', width: '70%',fontSize: 22}}>
                <i> Основываясь на Ваших предпочтениях,
                    мы порекомендуем интересные мероприятия и поможем записаться на них.
                </i>

            <i>
                    Вы можете легко пригласить знакомых составить вам компанию.
                    Благодаря быстрому поиску по кодовому слову
                    им будет очень легко найти нужное мероприятие среди тысяч других.
                </i>
            </div>


            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <Row>
                <InputGroup className={'mt-1'} style={{marginLeft: '25%', width: '50%'}} size="lg">
                    {/* <h3>{(codeDirty && codeError) && <div style={{color: 'red'}}>{codeError}</div>}</h3> */}
                    <InputGroup.Text id="inputGroup-sizing-lg">
                        <FaSearch />
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder={'Введите код мероприятия'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className={'input-group-append'}>
                        <Button 
                            variant='success'
                            size={"lg"}
                            onClick={() => dispatch(showByBeautyEvent(search))}>
                            Искать
                        </Button> 
                    </div>

                </InputGroup>
            </Row>
            
            <br/>
            <br/>
            <div className={'text-center'}>
                <h1>
                {/* {byBeautyEvent ? <>хуй</> : <>моча</>} */}
                <CardGroup className='card-group mt-3'>
                    <RecomendationCard title={byBeautyEvent.short_event_name}
                            description={byBeautyEvent.description_event}
                            sys_event_id={byBeautyEvent.sys_event_id}
                            link={`/event/${byBeautyEvent.sys_event_id}`            
                                            }
                        />
                </CardGroup>
                </h1>
                <h2> Направления занятий </h2>
            </div>
            <br/>

            <CategorySelector />
            <br/>
            <h1> {
                    isFetching === false
                    ?
                    byEvent.linked_groups.map((event, k) =>
                    <div key={k}>
                            <CardGroup className='card-group mt-3'>
                                <RecomendationCard title={event.short_event_name}
                                                description={event.description_event}
                                                sys_event_id={event.sys_event_id}
                                                // image={babka}
                                                link={`/event/${event.sys_event_id}`            
                                            }
                                />
                            </CardGroup>
                    </div>)
                    :
                    <div>Загруза</div>
                }
            </h1>
        </div>
    );
};

export default Home;