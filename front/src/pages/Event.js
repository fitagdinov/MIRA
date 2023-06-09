import {Button, Col, Container, Image, Row} from "react-bootstrap";
import babka from '../image/images.jpeg';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showEvents } from "../action/showEvents";


const Event = () => {
    const dispatch = useDispatch()
    const event = useSelector(state => state.events)
    const params = useParams()

    useEffect(() => {
        dispatch(showEvents(params.event_id));
      }, []);


   return(
        <Container>
        <br/>
        <h1> {event.short_event_name} </h1>
        <h5>  </h5>

        <Row>
            <Col md={7}>
                <Image width={'90%'} src={babka} fluid={true} className="rounded" alt="image" />
            </Col>
            <Col>
                {/* TODO: сделать кнопку, зависящей от количества мест и статуса записи */}

                <br/>
                <Button variant={'success'}
                     size={"lg"}
                     href={`/groups/${event.sys_event_id}`}>Посмотреть группы </Button>
                <br/>

                <br/>
                <h2>Описание: {event.description_event} </h2>
                <h3>КОД МЕРОПРИЯТИЯ: {event.beauty_code_event} </h3>

            </Col>
        </Row>

        <br/>
        <a>
            <h2>{event.description_event}</h2>
        </a>
    </Container>
   )
};

export default Event;