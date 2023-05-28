import React from 'react';
import CategorySelector from "../components/CategorySelector";
import {CardGroup, Col, Form, InputGroup, Row} from "react-bootstrap";
import RecomendationCard from "../components/RecomendationCard";
import {FaSearch} from "react-icons/fa";
import {useSelector} from "react-redux";
import SearchSelector from "../components/SearchSelector";

const Search = () => {
    const byEvent = useSelector(state => state.byTypeEvents)
    const isFetching = useSelector(state => state.byTypeEvents.isFetching)

    return (
        <div>
            <Row>
            <Col style={{marginLeft: '3%', marginRight: '3%'}} md={2}>
                <br/>
            <SearchSelector />
            </Col>

            <Col md={8}>
            <Row>
                <InputGroup className={'mt-5'} style={{marginLeft: '10%', width: '80%'}} size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"><FaSearch/></InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder={'Введите запрос'}
                    />
                </InputGroup>
            </Row>
            <br/>
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
                    <div>Загрузка</div>
            }
            </h1>
            </Col>

                <Col md={1}>


                </Col>
            </Row>
        </div>
    );
};

export default Search;