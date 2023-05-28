import { React, useEffect, useState }  from 'react';
import babka from '../image/images.jpeg'
import {Container, Row, Form, CardGroup, InputGroup, Button} from 'react-bootstrap';
import RecomendationCard from "../components/RecomendationCard";
import "../styles/Opros.css"
import {FaSearch} from "react-icons/fa";
import { showEvents, showREcommendationEvents } from '../action/showEvents';
import { useSelector, useDispatch } from 'react-redux';
import { authUser } from '../action/auth';
import { setRecommendationEvents } from '../reducers/recommendationReducer';
import CategorySelectorRec from "../components/CategorySelectorRec";

const Recomendation = () => {
    const dispatch = useDispatch()
    const events = useSelector( state => state.events )
    const auth = useSelector(state => state.authTest)
    const recEvents = useSelector(state => state.recommendationEvents)
    const isFetching = useSelector(state => state.recommendationEvents.isFetching)
    const [search, setSearch] = useState('')
    useEffect(() => { //при обновлении строницы загружаем инфу по карточке  зависимости от номера
        dispatch(showEvents(recEvents));
        dispatch(authUser(localStorage.getItem('fio'), localStorage.getItem('birthDate'))) // хард код для авторизации
      }, []);
    console.log(recEvents)
        return (


            <>
                <Row>
                <InputGroup className={'mt-4'} style={{marginLeft: '25%', width: '50%'}} size="lg" >
                    <InputGroup.Text id="inputGroup">
                        <FaSearch/>
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder={'Введите код мероприятия'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className={'input-group-append'} >
                        <Button variant='success'
                                size={"lg"}
                                onClick={() => {dispatch(showEvents(search))}}>Искать</Button> 
                            
                    </div>
            
                </InputGroup>
                </Row>
            <Container>
                <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
                <Form>
                <CategorySelectorRec />
                <h1> {
                    isFetching === false
                    ?
                    recEvents.recommended_events.map((event, k) =>
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
                    <div className={'text-center'}>Загруза</div>
                }
            </h1>
 
                </Form>
            </Container>

            </>

        );
};

export default Recomendation;