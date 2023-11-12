import React from "react";
//import logo from './logo.svg'; //will use this later
import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Ideas from "./Resident/IdeaPage/IdeaPageResident";
import IdeasMine from "./Resident/IdeaPage/IdeaPageMine";
import IdeasAdmin from "./Admin/IdeaPage/IdeaPageAdmin"
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
        <Route path="/adminideas" element = {<IdeasAdmin/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
