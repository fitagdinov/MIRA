import React, { useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../styles/Opros.css';
import { useSelector } from 'react-redux';

export default class OprosCard extends React.Component {
    render() {

        return (
            <Card style={{width: "18rem"}}>
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
                                
                            >
                                    Выбрать
                                </Button>
                        </div>
                    </Nav>
                </Card.Footer>
            </Card>
        );
    }
}