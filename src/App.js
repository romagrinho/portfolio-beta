import React, { useEffect, useState } from "react";
import './App.css';
import Homexp from "./Pages/Homexp/homexp";
import ErrorDead from "./Pages/Blue_screen/bluescreen"
import Loading from "./Pages/Loading/loading"
import Portfolio from "./Pages/Portfolio/portfólio";

function App() {
  return (
    <div className="App">
      {/*      <Homexp/> */}
      {/*  {  <ErrorDead/>} */}
      {/* <Loading /> */}
      <Portfolio/>
    </div>
  );
}

export default App;