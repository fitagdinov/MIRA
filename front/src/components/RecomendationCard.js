import React, { useState } from "react";
import {Card, Button, ListGroup} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../styles/Opros.css';
import { useDispatch, useSelector } from "react-redux";

export default class RecomendationCard extends React.Component {

    render() {
        return (
            <Card style={{width: "17rem", margin: "5px"}}>
                <Card.Img variant='top' src={this.props.image}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <div className={'text-center'}>
                    <Button size={"lg"} variant={'success'}
                            href={this.props.link}
                    >Подробнее</Button>
                    </div>
                    {/*TODO: добавить кнопку добавления в избранное*/}
                </Card.Body>
            </Card>
        );
    }
}