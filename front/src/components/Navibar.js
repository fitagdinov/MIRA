import React, {useState} from "react";
import {Navbar, Button, Nav, Modal, Form} from 'react-bootstrap'
import "../styles/Form.css"
import {FaSearch, FaHistory, FaHeart, FaEye} from "react-icons/fa";


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
            <Navbar.Brand className="navbar-brand px-3"> Привет Бабка </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mx-auto'>
                    <Nav.Link href={'/'}><FaEye/> Рекомендации</Nav.Link>
                    <Nav.Link><FaSearch/> Расширеный поиск</Nav.Link>
                    <Nav.Link><FaHistory/> История</Nav.Link>
                    <Nav.Link><FaHeart/> Избранное</Nav.Link>
                </Nav>
                <Nav className="px-3">
                    <Button variant="primary" className="mr-2" onClick={handleShow}> Авторизация </Button>
                    {/*<Button variant="primary" className="mr-2">вход</Button>*/}
                    {/*<Button variant="primary">выход</Button>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        {/*TODO: при введении данных должна случиться авторизация (прохождение опроса д.б. необязательным)*/}
        <Modal size={'lg'} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Пожалуйста введите свое ФИО и дату рождения для авторизации
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control className={'name'} placeholder="ФИО"/>

                    </Form.Group>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Дата рождения</Form.Label>
                        <Form.Control className={'date'} placeholder="Дата рождения"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer >
                <Button className={'mx-auto'} variant="primary" onClick={handleShowOpros}>Готово</Button>
            </Modal.Footer>


        </Modal>
        <Modal size={'lg'} show={showOpros} onHide={handleCloseOpros}>
            <Modal.Header closeButton>
                <Modal.Title>
                Ответьте на 3 вопроса, чтобы мы могли предложить Вам действительно интересные мероприятия.
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer class={'text-center'}>
                <Form className={'p-3'}>
                    <Button className={'mx-auto'} href={'/opros/1'}>Начать</Button>
                </Form>
            </Modal.Footer>

        </Modal>
    </>
    )
}