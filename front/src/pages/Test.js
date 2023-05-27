import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Form,
    InputGroup,
    Row,
} from "react-bootstrap";
import {FaHeart, FaSearch} from "react-icons/fa";
import CategorySelector from '../components/CategorySelector'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useEffect } from 'react';
import { showByTypeEvents } from '../action/showEvents';
import { CardGroup } from 'react-bootstrap';
import RecomendationCard from '../components/RecomendationCard';
import QACard from "../components/QACard";

const Test = () => {
    const dispatch = useDispatch()
    const byEvent = useSelector(state => state.byTypeEvents)
    // useEffect(() => {
    //     dispatch(showByTypeEvents('Для ума'))
    //   }, []);

    return (
        <div>

            <QACard question={'Вы дед'}/>

            <br/>
            <div className={'text-center'}>
                <h1>
                    Здесь найдутся занятия по душе
                    <FaHeart size={'20px'} style={{color: 'green', marginLeft: '10px'}}/>
                </h1>
            </div>
            {/*<div className={'text-center'}>*/}
            {/*    <img style={{width: "10%"}} src={image} alt={'image'}/>*/}
            {/*</div>*/}
            <br/>
            <div className={'text-center'} style={{marginLeft: '25%', width: '50%',fontSize: 22}}>
                <Button variant={'outline-success'} size={'lg'}>
                    <b>Авторизация</b>
                </Button>
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
                    <InputGroup.Text id="inputGroup-sizing-lg"><FaSearch/></InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder={'Введите код мероприятия'}
                    />
                    <div className={'input-group-append'}><Button variant='success' size={"lg"}>Искать</Button> </div>
                </InputGroup>
            </Row>
            <br/>
            <br/>
            <div className={'text-center'}>
                <h2> Направления занятий </h2>
            </div>
            <br/>

            <CategorySelector />

            <br/>
            <h1>{byEvent.linked_groups.map((event, k) =>
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
                }
            </h1>


        </div>
    );
};

export default Test;