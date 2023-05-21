import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';

const Home = () => {

    return (
        <>
        <h1>Home</h1>
            <Nav defaultActiveKey='/' as='ul'>
                <Nav.Item as='li'>
                    <Nav.Link href='/opros'>Opros</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
            
            // <Link>Home</Link>

            // <Link >Opros</Link>
    );
};

export default Home;