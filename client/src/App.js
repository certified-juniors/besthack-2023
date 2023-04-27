import React, { useEffect, useState } from "react";
import { MainPage, NavBar, Broker, Connection, About } from "./Components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";

import './App.css';

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
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
            broker={broker}
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
