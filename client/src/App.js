import React, { useState, useEffect, useRef } from "react";
import { MainPage, NavBar, Broker, Connection, About } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";

import './App.css';

function App() {
  const [socket, setSocket] = useState(io("http://localhost:8080"));
  console.log(socket);
  
  // useEffect(() => {
  //   const newSocket = io("http://localhost:8080");
  //   console.log(socket);
  //   setSocket(newSocket);
  // }, [socket])

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
            socket={socket}
          />}></Route>
          <Route path="/terminal/connection/*" element={<Connection
            socket={socket}
          />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;