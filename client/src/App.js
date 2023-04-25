import React, { useState } from "react";
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import StockPage from './Components/StockPage/StockPage'
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Components/Registration/Register';
import Profile from "./Components/Profile/Profile";
import Balance from "./Components/Balance/Balance";

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
          <Route path="/stocks" element={<StockPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/balance" element={<Balance />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
