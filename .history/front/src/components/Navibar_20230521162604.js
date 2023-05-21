import React from "react";
import {Navbar, Button, Nav, Modal, Form} from 'react-bootstrap'


export default function Navibar (){
    return(
    <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark">
            <Navbar.Brand>Привет Бабка</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link>1</Nav.Link>
                    <Nav.Link>2</Nav.Link>
                    <Nav.Link>3</Nav.Link>                    
                </Nav>
                <Nav>
                    <Button variant="primary" className="mr-2" onClick={handleShow}>FORM</Button>
                    <Button variant="primary" className="mr-2">вход</Button>
                    <Button variant="primary">выход</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Пожалуйста введите свое ФИО и дату рождения для авторизаии
                </Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control placeholder="ФИО"/>  /* и заканчиваются звёздочкой с косой чертой */
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </>
    )
}