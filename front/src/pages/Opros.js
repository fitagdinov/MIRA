import React, { useState } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import babka from '../image/images.jpeg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/Opros.css';
import OprosCard from '../components/OprosCard'


const Opros = () => {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)
//   TO DO: нужно опрос-страницу одну сделать, в ссылку передавать счетчик как номер опроса
    return (
        <Container>
            <h1 className={'item-margin'}>Выберите наиболее интересное мероприятие из предложенных</h1>

            <div className={'item-margin'}>
            <ProgressBar now={3} />
            </div>

            <Form>
                <Row>
                    <Col>
                        <OprosCard image={babka}
                                   title={'первое мероприятие'}
                                   description={'описание'}
                                   link={`/opros/${count}`}
                        />

                    </Col>
                    <Col>
                        <OprosCard image={babka}
                                   title={'второе мероприятие'}
                                   description={'описание'}
                                   link={`/opros/${count}`}
                        />
                    </Col>
                    <Col>
                        <OprosCard image={babka}
                                   title={'третье мероприятие'}
                                   description={'описание'}
                                   link={`/opros/${count}`}
                        />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Opros;