import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';

function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React page.</p> 
      <Link to="/" relative="path" className = "underline text-violet-900">
      Home
    </Link>
    <div className = "h-screen flex items-center justify-center"><Button></Button></div>
    </div>
    
  );
}

export default Home;