import React from "react";
//import logo from './logo.svg'; //will use this later
import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Ideas from "./Resident/IdeaPage/IdeaPageResident";
import IdeasMine from "./Resident/IdeaPage/IdeaPageMine";
import MakeIdea from "./Resident/IdeaComponent/IdeaComponentResident"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ideas" element = {<Ideas/>} />
        <Route path="/create" element = {<MakeIdea/>} />
        <Route path="/myideas" element = {<IdeasMine/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
