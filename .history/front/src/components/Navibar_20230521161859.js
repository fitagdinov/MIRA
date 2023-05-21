import React from "react";
import {Navbar, Button, Nav} from 'react-bootstrap'


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
                    <Button variant="primary" className="mr-2">FORM</Button>
                    <Button variant="primary" className="mr-2">вход</Button>
                    <Button variant="primary">выход</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}