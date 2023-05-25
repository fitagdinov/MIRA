import React from 'react';
import {observer} from "mobx-react-lite";
import Home from "../pages/Home"
import Opros from "../pages/Opros"
import OprosSecond from "../pages/OprosSecond"
import OprosThird from "../pages/OprosThird"
import User from "../pages/User"
import {Routes, Route} from 'react-router-dom'
import Event from "../pages/Event";
// import { HOME_ROUTE, OPROS_FIRST_ROUTE, OPROS_SECOND_ROUTE, OPROS_THIRD_ROUTE, USER_ROUTE } from "../utils/consts"

const AppRouter = observer(() => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/opros/1" element={<Opros />}/>
            <Route path="/opros/2" element={<OprosSecond />}/>
            <Route path="/opros/3" element={<OprosThird />}/>
            <Route path="/test_event" element={<Event />}/>
        </Routes>
    );
});

export default AppRouter;