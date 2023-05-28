import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import React, { useState}from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../action/setAnswers";


const QA = () => {
        const [show, setShow] = useState(true);
        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        const dispatch = useDispatch()
        let results = useSelector(state => state.firstAnswer)
        results.grand_sys_id = localStorage.getItem('grandSysId')
        const handleCloseReady = () => {
            setShow(false)
            dispatch(getAnswer(results))
        }


        const question1 = (k) => {
            if (results.grand_poll_passing.question1[k] === 0){
                results.grand_poll_passing.question1[k] = 1
            }
            else {
                results.grand_poll_passing.question1[k] = 0
            }
        }
        const question1_1 = (k) => {
            if (results.grand_poll_passing.question1[k] === 0){
                results.grand_poll_passing.question1[k] = 1
            }
            else {
                results.grand_poll_passing.question1[k] = 0
            }
        }
        const question2 = (k) => {
            if (results.grand_poll_passing.question2[k] === 0){
                results.grand_poll_passing.question2[k] = 1
            }
            else {
                results.grand_poll_passing.question2[k] = 0
            }
        }
        const question2_2 = (k) => {
            if (results.grand_poll_passing.question2[k] === 0){
                results.grand_poll_passing.question2[k] = 1
            }
            else {
                results.grand_poll_passing.question2[k] = 0
            }
        }
        const question3 = (k) => {
            if (results.grand_poll_passing.question3[k] === 0){
                results.grand_poll_passing.question3[k] = 1
            }
            else {
                results.grand_poll_passing.question3[k] = 0
            }
        }
        const question3_3 = (k) => {
            if (results.grand_poll_passing.question3[k] === 0){
                results.grand_poll_passing.question3[k] = 1
            }
            else {
                results.grand_poll_passing.question3[k] = 0
            }
        }
        const question4 = (k) => {
            if (results.grand_poll_passing.question4[k] === 0){
                results.grand_poll_passing.question4[k] = 1
            }
            else {
                results.grand_poll_passing.question4[k] = 0
            }
        }
        const question4_4 = (k) => {
            if (results.grand_poll_passing.question4[k] === 0){
                results.grand_poll_passing.question4[k] = 1
            }
            else {
                results.grand_poll_passing.question4[k] = 0
            }
        }
        const question5 = (k) => {
            if (results.grand_poll_passing.question5[k] === 0){
                results.grand_poll_passing.question5[k] = 1
            }
            else {
                results.grand_poll_passing.question5[k] = 0
            }
        }
        const question5_5 = (k) => {
            if (results.grand_poll_passing.question5[k] === 0){
                results.grand_poll_passing.question5[k] = 1
            }
            else {
                results.grand_poll_passing.question5[k] = 0
            }
        }
        return (
            <>
            <Modal size={'lg'} show={show} onHide={handleClose}>
                <Modal.Header className={'text-center'} closeButton>
                    <Modal.Title>
                        <h2>
                            Ответьте на 5 вопросов (выберите один или несколько вариантов)
                        </h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Row>
                            <Col md={1}/>
                            <Col md={10}>
                        <h4 >1. Как обычно вы проводите свободное время?</h4>
                            </Col>
                        <Col md={1}/>
                        </Row>

                        <br/>
                        <br/>
                        <Col md={1}/>
                        <Col md={5}>
                        {['занятие спортом и физкультурой',
                            'походы в театр, музеи, выставки',
                            'работа по дому и огороду'].map((option, key) => (
                            <div className="mb-3" key={key}>
                                <Form.Check
                                    label={option}
                                    name="group1"
                                    type='checkbox'
                                    id={option}
                                    style={{fontSize: '18px'}}
                                    onChange={() => question1(key)}
                                    onClick={() => console.log(key)}
                                />
                            </div>
                        ))}
                        </Col>

                        <Col md={5}>
                        {['гулять в парках и на природе',
                            'рыбалка и охота',
                            'ходить на экскурсии'].map((option, key) => (
                            <div className="mb-3" key={key}>
                                <Form.Check
                                    label={option}
                                    name="group1"
                                    type='checkbox'
                                    id={option}
                                    style={{fontSize: '18px'}}
                                    onChange={() => question1_1(key+3)}
                                    onClick={() => console.log(key+3)}
                                />
                            </div>
                        ))}
                        </Col>
                        <Col md={1}/>

                    </Row>
                    <hr className={'mt-1'} width="100%" size="2" color="#ff0000" />
                    <Row className="mb-3">
                        <Row>
                            <Col md={1}/>
                            <Col md={10}>
                                <h4>2. В какой сфере вы работали или работаете?</h4>
                            </Col>
                            <Col md={1}/>
                        </Row>

                        <br/>
                        <br/>
                        <Col md={1}/>
                        <Col md={5}>
                            {['образование и наука',
                                'искусство и гуманитарные науки',
                                'сфера обслуживания',
                                'техническая сфера'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question2(key)}
                                        onClick={() => console.log(key)}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col md={5}>
                            {['медицина и здравоохранение',
                                'служба в военных структурах и внутренних органах',
                                'спортивная сфера'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question2_2(key+4)}
                                        onClick={() => console.log(key+4)}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col md={1}/>
                    </Row>
                    <hr className={'mt-1'} width="100%" size="2" color="#ff0000" />
                    <Row className="mb-3">
                        <Row>
                            <Col md={1}/>
                            <Col md={10}>
                                <h4>3. Какие передачи вы обычно смотрите?</h4>
                            </Col>
                            <Col md={1}/>
                        </Row>

                        <br/>
                        <br/>
                        <Col md={1}/>
                        <Col md={5}>
                            {['выпуски новостей, док. фильмы, интеллектуальные телевикторины',
                                'танцевальные и музыкальные'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question3(key)}
                                        onClick={() => console.log(key)}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col md={5}>
                            {['спортивные трансляции и передачи про здоровье',
                                'кулинарные шоу, передачи про ремонт, садоводство и т.п.'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question3_3(key+2)}
                                        onClick={() => console.log(key+2)}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col md={1}/>
                    </Row>
                    <hr className={'mt-1'} width="100%" size="2" color="#ff0000" />
                    <Row className="mb-3">
                        <Row>
                            <Col md={1}/>
                            <Col md={10}>
                                <h4>4. Какую литературу вы читаете?</h4>
                            </Col>
                            <Col md={1}/>
                        </Row>

                        <br/>
                        <br/>
                        <Col md={1}/>
                        <Col md={5}>
                            {['новостные газеты и статьи',
                                'модные журналы',
                                'спортивные статьи и новости'].map((option,key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question4(key)}
                                        onClick={() => console.log(key)}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col md={5}>
                            {['художественная литература',
                                'научно-популярная литература'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question4_4(key+3)}
                                        onClick={() => console.log(key+3)}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col md={1}/>
                    </Row>
                    <hr className={'mt-1'} width="100%" size="2" color="#ff0000" />
                    <Row className="mb-3">
                        <Row>
                            <Col md={1}/>
                            <Col md={10}>
                                <h4>5. В каких сферах вы бы хотели себя попробовать?</h4>
                            </Col>
                            <Col md={1}/>
                        </Row>

                        <br/>
                        <br/>
                        <Col md={1}/>
                        <Col md={5}>
                            {['занятие спортом и физкультурой',
                                'танцевальные и музыкальные занятия',
                                'экскурсии и прогулки на свежем воздухе'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question5(key)}
                                        onClick={() => console.log(key)}
                                    />
                                </div>
                            ))}
                        </Col>


                        <Col md={5}>
                            {['интеллектуальные игры и викторины',
                                'искусство и рукоделие'].map((option, key) => (
                                <div className="mb-3" key={key}>
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                        onChange={() => question5_5(key+3)}
                                        onClick={() => console.log(key+3)}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col md={1}/>
                    </Row>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="success"
                            href="/"
                            type="submit"
                            size={'lg'}
                            onClick={() => handleCloseReady()}>
                        Готово
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
}

export default QA;