import React, { useEffect, useRef } from "react";
import { MainPage, NavBar, Broker, Connection, About } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";

import './App.css';

function App() {
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:8080");

    return () => {
      socket.disconnect();
    };
  }, [])

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
            socket={socket.current}
          />}></Route>
          <Route path="/terminal/connection/*" element={<Connection
            socket={socket.current}
          />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
