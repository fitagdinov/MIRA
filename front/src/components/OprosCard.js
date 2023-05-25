import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../styles/Opros.css';

export default class OprosCard extends React.Component {
    render() {
        return (
            <Card style={{width: "18rem"}}>
                <Card.Img variant='top' src={this.props.image}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                <Card.Footer class={'mx-auto'}>
                    <Nav defaultActiveKey='/' as='ul'>
                        <div className={'item-margin-sm'}>
                            <Button variant='primary' href={this.props.link}>Выбрать</Button>
                        </div>
                    </Nav>
                </Card.Footer>
            </Card>
        );
    }
}