import React from "react";
//import logo from './logo.svg'; //will use this later
import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import IdeasPageResident from "./Resident/IdeaPage/IdeaPageResident";
import IdeasPageOfficial from "./Govorg/IdeaPage/IdeaPageGovorg";
import IdeasPageAdmins from "./Admin/IdeaPage/IdeaPageAdmin";
import IdeasMine from "./Resident/IdeaPage/IdeaPageMine";
import IdeasAdmin from "./Admin/IdeaPage/IdeaPageAdmin"
import IdeasGovorg from "./Govorg/IdeaPage/IdeaPageGovorg"
import MakeIdea from "./Resident/IdeaComponent/IdeaComponentResident"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/ideas-page-resident" element = {<IdeasPageResident/>} />
        <Route path="/ideas-page-official" element={<IdeasPageOfficial/>} />
        <Route path="/ideas-page-admin" element={<IdeasPageAdmins/>} />
        {/* You can create an idea if you are a resident */}
        <Route path="/create" element = {<MakeIdea/>} />
        {/* Residents only has MyIdeas */ }
        <Route path="/myideas" element = {<IdeasMine/>} />
        {/* <Route path="/adminideas" element = {<IdeasAdmin/>} />
        <Route path="/govorgideas" element = {<IdeasGovorg/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
