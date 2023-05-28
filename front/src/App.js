import Navibar from "./components/Navibar";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/AppRouter";



function App() {
  // const dispatch = useDispatch()

  return (
    <>
      <Navibar/>
      <AppRouter/>
      {/* <Opros/> */}
    </>
  );
}

export default App;
