import Navibar from "./components/Navibar";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Opros from "./pages/Opros";
import Home from "./pages/Home";
import OprosSecond from "./pages/OprosSecond";
import OprosThird from "./pages/OprosThird";
function App() {
  return (
    <>
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/opros/1" element={<Opros />}/>
        <Route path="/opros/2" element={<OprosSecond />}/>
        <Route path="/opros/3" element={<OprosThird />}/>
      </Routes>
      {/* <Opros/> */}
    </>
  );
}

export default App;
