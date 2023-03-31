
import React from "react";
import { useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

function App() {

 


  return (
    <div className="App">
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </div>

  )
}
export default App;
