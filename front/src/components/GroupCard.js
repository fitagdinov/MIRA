import React, { useState } from "react";
import {Card, Button, ListGroup} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../styles/Opros.css';
import { useDispatch, useSelector } from "react-redux";

export default class GroupCard extends React.Component {

    render() {
        return (
            <Card style={{width: "50%", margin: "5px", }}>
                <Card.Img variant='top' src={this.props.image}/>
                <Card.Body>
                    <Card.Title>{this.props.short_event_name}</Card.Title>
                    <Card.Text style={{fontSize:'35px'}}>{this.props.description}</Card.Text>
                    {/* <Card.Text style={{fontSize:'15px'}}> Статус:{this.props.online_status_group}</Card.Text> */}
                    <Card.Text style={{fontSize:'20px'}}> Адрес:{this.props.adress}</Card.Text>
                    <Card.Text style={{fontSize:'20px'}}>Округ:{this.props.okr}</Card.Text>
                    <div className={'text-center'}>
                    <Button size={"lg"} variant={'success'}
                        href="/groupmodal"
                    >Записаться</Button>
                    </div>
                    {/*TODO: добавить кнопку добавления в избранное*/}
                </Card.Body>
            </Card>
        );
    }
}