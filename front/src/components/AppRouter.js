import React from 'react';
import {observer} from "mobx-react-lite";
import Home from "../pages/Home"
import Opros from "../pages/Opros"
import OprosSecond from "../pages/OprosSecond"
import OprosThird from "../pages/OprosThird"
import {Routes, Route} from 'react-router-dom'
import Event from "../pages/Event";
import Recomendation from '../pages/Recomendation';



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
            <Route path="/recomendation" element={<Recomendation />}/> 
            <Route path="/opros/1" element={<Opros />}/>
            <Route path="/opros/2" element={<OprosSecond />}/>
            <Route path="/opros/3" element={<OprosThird />}/>
            <Route path="/test_event" element={<Event />}/> 
        </Routes>
    );
};

export default AppRouter;