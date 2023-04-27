import React from "react";
import { MainPage, NavBar, Broker, Connection } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  const broker = [
    {
      name: "Sber",
    },
    {
      name: "Tinkoff",
    },
    {
      name: "Finnhub",
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/terminal" element={<Broker
            broker={broker}
          />}></Route>
          <Route path="/terminal/connection/*" element={<Connection
          />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
