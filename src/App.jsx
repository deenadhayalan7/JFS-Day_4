import React from 'react'
import { Route,Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Home from "./pages/Home";
import RecruitVolunteers from "./pages/RecruitVolunteers";
// import FindOpportunities from "./pages/FindOpportunities";
import FindOpportunities from "./pages/FindOpportunities";
import Register from './components/Register';
import Events from './components/Events';
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path='/FindOpportunities' element={<FindOpportunities/>}/>
      <Route exact path='/RecruitVolunteers' element={<RecruitVolunteers/>}/>
      <Route exact path='/Navbar' element={<Navbar/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Events' element={<Events/>}/>
      </Routes>
    </>
    
  );
};

export default App;
