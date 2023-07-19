import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { ArrowRightCircle } from 'react-bootstrap-icons';

function Home() {
  return (
    <div>
    <div className="home">
        <Navbar/>
      </div>
      <div className="abt">
        <h1>We send you good volunteers to help with your good cause from our network</h1>
        <h2> Ready to get started on your volunteer journey?</h2>
      </div>
      <div className="grid-container">
        {/* <Link to="/Events">
          <button onClick={() => console.log('connect')}>Events<ArrowRightCircle size={25} /></button> */}
         {/* </Link> */}
         <div className="grid-container">
          <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
         <div className="grid-item">5</div>
         <div className="grid-item">6</div>
  </div>
      </div>
      </div>
  );
}

export default Home;