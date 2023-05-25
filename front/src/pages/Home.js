import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../action/repos';
import { authUser } from '../action/auth';

const Home = () => {
    return (
        <>
            <Nav defaultActiveKey='/' as='ul'>
                <Nav.Item as='li'>
                    <Nav.Link href='/opros/1'>Opros</Nav.Link>
                    <h1>{localStorage.getItem('isAuth')}</h1>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default Home;