import React from "react";
//import logo from './logo.svg'; //will use this later
import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
