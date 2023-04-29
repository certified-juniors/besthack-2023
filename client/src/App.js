import React from "react";
import { MainPage, NavBar, Broker, Connection, About, Graphics } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";

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
          <Route path="/graphics" element={<Graphics />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
})

export default App;