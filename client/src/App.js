import React, { useState } from "react";
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import StockPage from './Components/StockPage/StockPage'
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Components/Registration/Register';
import Login from './Components/Login/Login';

function App() {
  const [auth, setAuth] = useState(false);

  const loginUser = () => {
    setAuth(true);
  }

  const logoutUser = () => {
    setAuth(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          logoutUser={logoutUser}
          loginUser={loginUser}
          auth={auth}
        />
    
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
