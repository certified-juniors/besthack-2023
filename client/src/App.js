import React, { useState } from "react";
import { MainPage, NavBar, Broker, Connection, About } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import { observer } from "mobx-react-lite";
import Socket from "./Store/socket";

import './App.css';

const App = observer(() => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/terminal" element={<Broker />}></Route>
          <Route path="/terminal/connection/*" element={<Connection />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
})

export default App;