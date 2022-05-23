import './App.css';
import React from 'react';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import AllOrders from './AllOrders';
import Cart from './Cart';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/allOrders" element={<AllOrders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
