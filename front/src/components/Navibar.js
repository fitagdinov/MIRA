import React, {useState } from "react";
import {Navbar, Button, Nav, Modal, Form} from 'react-bootstrap'
import "../styles/Form.css"
import {FaSearch, FaHistory, FaHeart, FaEye, FaHome} from "react-icons/fa";
import { authUser } from "../action/auth";
import { useDispatch, useSelector } from 'react-redux';
import logo from '../image/Logo.svg'


export default function Navibar (){

    const [show, setShow] = useState(false) // хранит состояни модального окна авторизации
    const [fio, setFio] = useState(101387414) // хранит в себе состояние ввыода ФИО
    const [birthDate, setBirthDate] = useState('1937-02-17') // хранит в себе состояние ввыода даты рождения
    const [showOpros, setShowOpros] = useState(false) // хранит в себе состояние модального окна с просьбой пройти опрос
    const dispatch = useDispatch()
    const auth = useSelector(state => state.authTest) // важно чтоб было authTest - название редюсера
    const handleClose = () => setShow(false) //закрывает окно авторизации
    const handleShow = () => setShow(true) // открывает окно авторизации
    const handleCloseOpros = () => setShowOpros(false) // закрывает окно "пройдите опрос"

    const handleShowOpros = (fio, birthDate) => { // хранит в себе 3 функции
        setShowOpros(true) // открывает окно "пройдите опрос"
        setShow(false) // закрывает окно авторизации
        dispatch(authUser(fio, birthDate)) // заполняем store таской на закгрузку данных и обновления state
    }

    if (auth.grand_exist == true){
        return(
            <>
                <Navbar style={{fontSize: '20px'}} collapseOnSelect expand='lg' bg='dark' variant="dark">
                    <Navbar.Brand className="navbar-brand px-3">
                        <img style={{height: '50px'}} src={logo} alt={'Logo'}/> {auth.grand_address}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link href={'/'}><FaHome/> Главная</Nav.Link>
                            <Nav.Link href={'/recomendation'}><FaEye/> Рекомендации</Nav.Link>
                            <Nav.Link><FaSearch/> Расширеный поиск</Nav.Link>
                            <Nav.Link><FaHistory/> Мои мероприятия </Nav.Link>
                            <Nav.Link><FaHeart/> Избранное</Nav.Link>
                        </Nav>
                        <Nav className="px-3">
                            <Button size={'lg'} variant="primary" className="mr-2" onClick={handleShow}> Авторизация </Button>
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
                                <Form.Control
                                    className={'name'}
                                    placeholder="ФИО"
                                    value={fio}
                                    onChange={(e) => setFio(e.target.value)}/>

                            </Form.Group>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Дата рождения</Form.Label>
                                <Form.Control
                                    className={'date'}
                                    placeholder="Дата рождения"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer >
                        <Button
                            className={'mx-auto'}
                            variant="primary"
                            onClick={() => {handleShowOpros(fio, birthDate);}} // при нажатии вызываем функцию происходит действи (описано выше)
                        >
                            Готово</Button>
                    </Modal.Footer>
                </Modal>
                <Modal size={'lg'} show={showOpros} onHide={handleCloseOpros}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Ответьте на 3 вопроса, чтобы мы могли предложить Вам действительно интересные мероприятия.
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Footer className={'text-center'}>
                        <Form className={'p-3'}>
                            <Button className={'mx-auto'} href={'/opros/1'}>Начать</Button>
                        </Form>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }
    else {
        return(
            <>
                <Navbar style={{fontSize: '20px'}} collapseOnSelect expand='lg' bg='dark' variant="dark">
                    <Navbar.Brand className="navbar-brand px-3">
                        <img style={{height: '50px'}} src={logo} alt={'Logo'}/> {auth.grand_address}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link href={'/'}><FaHome/> Главная</Nav.Link>
                            <Nav.Link href={'/recomendation'}><FaEye/> Рекомендации</Nav.Link>
                            <Nav.Link><FaSearch/> Поиск</Nav.Link>
                            {/*<Nav.Link><FaHistory/> Мои мероприятия</Nav.Link>*/}
                            {/*<Nav.Link><FaHeart/> Избранное</Nav.Link>*/}
                        </Nav>
                        <Nav className="px-3">
                            <Button variant="primary" size={'lg'} className="mr-2" onClick={handleShow}> Авторизация </Button>
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
                                <Form.Control
                                    className={'name'}
                                    placeholder="ФИО"
                                    value={fio}
                                    onChange={(e) => setFio(e.target.value)}/>

                            </Form.Group>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Дата рождения</Form.Label>
                                <Form.Control
                                    className={'date'}
                                    placeholder="Дата рождения"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer >
                        <Button
                            className={'mx-auto'}
                            variant="primary"
                            onClick={() => {handleShowOpros(fio, birthDate);}} // при нажатии вызываем функцию происходит действи (описано выше)                                           
                        >
                            Готово</Button>
                    </Modal.Footer>
                </Modal>
                <Modal size={'lg'} show={showOpros} onHide={handleCloseOpros}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Ответьте на 3 вопроса, чтобы мы могли предложить Вам действительно интересные мероприятия.
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Footer className={'text-center'}>
                        <Form className={'p-3'}>
                            <Button className={'mx-auto'} href={'/opros/1'}>Начать</Button>
                        </Form>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }
}