import React from 'react';
import Home from "../pages/Home"
import {Routes, Route} from 'react-router-dom'
import Event from "../pages/Event";
import Recomendation from '../pages/Recomendation';
import Test from "../pages/Test";
import Search from '../pages/Search';
import QA from '../pages/QA';
import TestRecomendation from '../pages/TestRecomendations';



const AppRouter = () => {
    const isAuth = false
    return (
        // <Switch>
        //     {isAuth && authRoutes.map(({path, Component}) =>
        //         // exact говорит о том что путь должен точно совпадать
        //         // нужно указывать ключ, здесь указан путь, так как он уникальный
        //         <Route key={path} path={path} component={Component} exact/>)}
        //     {isAuth && publicRoutes.map(({path, Component}) =>
        //         <Route key={path} path={path} component={Component} exact/>)}
        // </Switch>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/TestRecomendation" element={<TestRecomendation />}/>
            <Route path="/QA" element={<QA />}/>
            <Route path="/event/:event_id" element={<Event/>}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/recomendation" element={<Recomendation />}/>
            <Route path="/test_event" element={<Event />}/>
        </Routes>
    );
};

export default AppRouter;