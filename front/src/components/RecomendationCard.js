import React, { useState } from "react";
import {Card, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../styles/Opros.css';
import { useDispatch, useSelector } from "react-redux";

export default class RecomendationCard extends React.Component {
    


    render() {
        // {console.log(this.props.sys_event_id)}
        return (
            <Card style={{width: "17rem", margin: "5px"}}>
                <Card.Img variant='top' src={this.props.image}/>
                <Card.Body> 
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                <Card.Footer className={'mx-auto'}>
                    <Nav defaultActiveKey='/' as='ul'>
                        <div className={'item-margin-sm'}>
                            <Button variant={'success'}
                             href={this.props.link}
                             >Подробнее</Button>
                            {/*TODO: добавить кнопку добавления в избранное*/}
                        </div>
                    </Nav>
                </Card.Footer>
            </Card>
        );
    }
}