import React from "react";
import {Button, Navbar, Button, Link} from 'react-bootstrap'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";


export default function Navibar (){
    return(
    <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark">
            <Navbar.Brand>Привет Бабка</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="mr-auto">
                <Nav className='mr-auto'>
                    <Nav.Lik>1</Nav.Lik>
                    <Nav.Lik>2</Nav.Lik>
                    <Nav.Lik>3</Nav.Lik>                    
                </Nav>
                <Nav>
                    <Button variant="primary">вход</Button>
                    <Button variant="primary">выход</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}