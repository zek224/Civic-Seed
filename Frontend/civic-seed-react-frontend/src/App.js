<<<<<<< HEAD
import './App.css';
import Register from './Auth/Register';

function App() {
  return (
    <Register/>
=======
import React from "react";
//import logo from './logo.svg'; //will use this later
import "./App.css";
import LoginPage from "./Resident/LoginPage/LoginPageResident"; // Import the LoginPage component
import IdeaPage from "./Resident/IdeaPage/IdeaPageResident"; // Import the LoginPage component
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ideas" element={<IdeaPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 37905b84a10bf14bd24cd0aba973f36f762b53e4
  );
}
export default App;
