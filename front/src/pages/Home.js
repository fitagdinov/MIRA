import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../action/repos';
import { authUser } from '../action/auth';

const Home = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const auth = useSelector(state => state.auth.items)
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
                    {repos.map((repo, i) => <div key={i}>ura {i}</div>)}
                </Nav.Item>
            </Nav>
        </>
    );
};

export default Home;