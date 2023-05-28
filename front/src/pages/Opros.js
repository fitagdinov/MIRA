import React, { useState } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import babka from '../image/images.jpeg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/Opros.css';
import OprosCard from '../components/OprosCard'
import QACard from '../components/QACard';


const Opros = () => {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)// хард код номера опроса
    
//   TO DO: нужно опрос-страницу одну сделать, в ссылку передавать счетчик как номер опроса
    return (
        <QACard question={'Вы дед'}/>
    );
};

export default Opros;