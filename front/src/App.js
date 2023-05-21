import Navibar from "./components/Navibar";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom'
import Opros from "./pages/Opros";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/opros" element={<Opros />}/>

      </Routes>
      {/* <Opros/> */}
    </>
  );
}

export default App;
