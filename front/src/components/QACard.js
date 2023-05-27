import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import React, {useState}from 'react'


const QACard = () => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

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
                            'работа по дому и огороду'].map((option) => (
                            <div className="mb-3">
                                <Form.Check
                                    label={option}
                                    name="group1"
                                    type='checkbox'
                                    id={option}
                                    style={{fontSize: '18px'}}
                                />
                            </div>
                        ))}
                        </Col>

                        <Col md={5}>
                        {['гулять в парках и на природе',
                            'рыбалка и охота',
                            'ходить на экскурсии'].map((option) => (
                            <div className="mb-3">
                                <Form.Check
                                    label={option}
                                    name="group1"
                                    type='checkbox'
                                    id={option}
                                    style={{fontSize: '18px'}}
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
                                'техническая сфера'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col md={5}>
                            {['медицина и здравоохранение',
                                'служба в военных структурах и внутренних органах',
                                'спортивная сфера'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
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
                                'танцевальные и музыкальные'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col md={5}>
                            {['спортивные трансляции и передачи про здоровье',
                                'кулинарные шоу, передачи про ремонт, садоводство и т.п.'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
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
                                'спортивные статьи и новости'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col md={5}>
                            {['художественная литература',
                                'научно-популярная литература'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
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
                                'экскурсии и прогулки на свежем воздухе'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                    />
                                </div>
                            ))}
                        </Col>


                        <Col md={5}>
                            {['интеллектуальные игры и викторины',
                                'искусство и рукоделие'].map((option) => (
                                <div className="mb-3">
                                    <Form.Check
                                        label={option}
                                        name="group1"
                                        type='checkbox'
                                        id={option}
                                        style={{fontSize: '18px'}}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col md={1}/>
                    </Row>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" size={'lg'}>
                        Готово
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
}

export default QACard;