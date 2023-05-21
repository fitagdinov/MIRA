import React, {useState} from "react";
import {Navbar, Button, Nav, Modal, Form} from 'react-bootstrap'


export default function Navibar (){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showOpros, setShowOpros] = useState(false)
    const handleCloseOpros = () => setShowOpros(false)
    const handleShowOpros = () => {
        setShowOpros(true)
        setShow(false)
    }
    return(
    <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark">
            <Navbar.Brand>Привет Бабка</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link>Рекомендации</Nav.Link>
                    <Nav.Link>Расширеный поиск</Nav.Link>
                    <Nav.Link>История</Nav.Link>  
                    <Nav.Link>Избранное</Nav.Link>                    
                </Nav>
                <Nav>
                    <Button variant="primary" className="mr-2" onClick={handleShow}>FORM</Button>
                    <Button variant="primary" className="mr-2">вход</Button>
                    <Button variant="primary">выход</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Пожалуйста введите свое ФИО и дату рождения для авторизаии
                </Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control placeholder="ФИО"/> 
                            
                        </Form.Group>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>дата  </Form.Label>
                            <Form.Control placeholder="Дата рождения"/> 
                        </Form.Group>
                        <Button variant="primary" className="mr-2" onClick={handleShowOpros}>Готов</Button>
                    </Form>
                </Modal.Body>
            </Modal.Header>
        </Modal>
        <Modal show={showOpros} onHide={handleCloseOpros}>
            <Modal.Header closeButton>
                <Modal.Title>
                Ответьте на 3 вопроса, чтобы мы могли предложить Вам действительно интересные мероприятия.
                </Modal.Title>
                <Modal.Body>
                    <Form>
                        <Button>Начать</Button>
                    </Form>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    </>
    )
}