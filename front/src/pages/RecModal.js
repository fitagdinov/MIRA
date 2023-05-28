import React from 'react';
import '../styles/Opros.css';
import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';



const ModalRec = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleCloseReady = () => {
        setShow(false)
    }
    
//   TO DO: нужно опрос-страницу одну сделать, в ссылку передавать счетчик как номер опроса
    return (
        <Modal size={'lg'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Для просмотра рекомендаций необходима авторизация
            </Modal.Title>
        </Modal.Header>

        <Modal.Footer className={'text-center'}>
            <Form className={'p-3'} >
    
                <Button href="/" variant='success'
                >Авторизация</Button>
            </Form>
        </Modal.Footer>
    </Modal> 

    );
};

export default ModalRec;