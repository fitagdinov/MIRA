import React from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import babka from '../image/grob.jpg'
import ProgressBar from "react-bootstrap/ProgressBar";
import '../styles/Opros.css';
import OprosCard from "../components/OprosCard";


const Opros = () => {
 
    return (
        <Container>
            <h1 className={'item-margin'}>Выберите наиболее интересное мероприятие из предложенных</h1>

            <div className={'item-margin'}>
                <ProgressBar now={33} />
            </div>

            <Form>
                <Row>
                    <Col>
                        <OprosCard image={babka}
                                   title={'первое мероприятие'}
                                   description={'описание'}
                                   link={'/opros/3'}
                        />

                    </Col>
                    <Col>
                        <OprosCard image={babka}
                                   title={'второе мероприятие'}
                                   description={'описание'}
                                   link={'/opros/3'}
                        />
                    </Col>
                    <Col>
                        <OprosCard image={babka}
                                   title={'третье мероприятие'}
                                   description={'описание'}
                                   link={'/opros/3'}
                        />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Opros;