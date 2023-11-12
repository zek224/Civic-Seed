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
import FundedIdeasPageGovorg from "./Govorg/IdeaPage/FundedIdeaPageGovorg";
import MakeIdea from "./Resident/IdeaComponent/IdeaComponentResident"
import { BrowserRouter, Route, Routes, Navigation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ideas-page-resident" element = {<IdeasPageResident/>} />
        <Route path="/ideas-page-official" element={<IdeasPageOfficial/>} />
        <Route path="/ideas-page-admin" element={<IdeasPageAdmins/>} />
        <Route path="/funded-ideas" element={<FundedIdeasPageGovorg/>} />
        {/* You can create an idea if you are a resident */}
        <Route path="/create" element = {<MakeIdea/>} />
        {/* Residents only has MyIdeas */ }
        <Route path="/myideas" element = {<IdeasMine/>} />
        {/* <Route path="/adminideas" element = {<IdeasAdmin/>} />
        <Route path="/govorgideas" element = {<IdeasGovorg/>} /> */}
        {/* default Navigate to /login */}
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
