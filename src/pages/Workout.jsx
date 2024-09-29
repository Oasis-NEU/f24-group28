import React from 'react';
import { Link } from "react-router-dom";
import "./Workout.css"

function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React page.</p> 
      <Link to="/" relative="path">
      Home
    </Link>
    <div className = "container">
      <button type="button" className = "bg-blue">Enter workout</button></div>
    </div>
    
  );
}

export default Home;