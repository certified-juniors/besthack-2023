import React from "react";
import { MainPage, NavBar, Broker, Connection, About } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";

import './App.css';

const App = observer(() => {

  document.addEventListener('mousemove', e => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = Math.round(e.pageX / w * 100);
    const y = Math.round(e.pageY / h * 100);
    document.body.style.background = `radial-gradient(at ${x}% ${y}%, rgba(10, 73, 128, 1), rgba(0, 0, 0, 1))`;
  });

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