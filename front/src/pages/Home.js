import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../action/repos';

const Home = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)

    useEffect(()=>{
        dispatch(getRepos())
    }, [])

    return (
        <>
        <h1>Home</h1>
            <Nav defaultActiveKey='/' as='ul'>
                <Nav.Item as='li'>
                    <Nav.Link href='/opros/1'>Opros</Nav.Link>
                    {repos.map(repo => <div>ura</div>)}
                </Nav.Item>
            </Nav>
        </>
            
            // <Link>Home</Link>

            // <Link >Opros</Link>
    );
};

export default Home;