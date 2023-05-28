import {Button, Col, Container, Image, Row} from "react-bootstrap";
import babka from '../image/images.jpeg';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showEvents } from "../action/showEvents";
import { CardGroup } from "react-bootstrap";
import RecomendationCard from "../components/RecomendationCard";
import { showGroups } from "../action/showGroups";
import GroupCard from "../components/GroupCard";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";

const Groups = () => {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.allGroupByEvent)
    const isFetching = useSelector(state => state.byTypeEvents.isFetching)
    const [show, setShow] = useState(false) // хранит состояни модального окна авторизации
    const param = useParams()
    const handleClose = () => setShow(false) //закрывает окно авторизации
    const handleShow = () => setShow(true) 
    console.log(1)
    useEffect(() => {
        dispatch(showGroups(groups));
      }, []);
   return(
                
            <h1> 
                {groups.linked_groups.map((group, k) =>
                <div key={k}>
                        <CardGroup className='card-group mt-3'>
                            <GroupCard short_event_name={group.short_event_name}
                                            description={group.description_group}
                                            online_status_group={group.online_status_group}
                                            adress={group.address_group}
                                            okr={group.area_group}
                                            link={`/groupmodal`}
                            />
                        </CardGroup>
                </div>)

            }
        </h1>
        
   )
};

export default Groups;