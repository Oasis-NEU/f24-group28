import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';

function Workout() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link to="/" relative="path" className = "underline text-violet-900">
      Home
    </Link>
    <div className = "h-screen flex items-center justify-center"><Button></Button></div>
    </div>
    
  );
}

export default Workout;