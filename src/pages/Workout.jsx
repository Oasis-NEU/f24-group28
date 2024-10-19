import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';
import WorkoutButton from '../components/workoutButton';
import { CookiesProvider, useCookies } from 'react-cookie'
import Schedule from '../components/schedule';

function Workout() {
  const [cookies, setCookie] = useCookies(['user'])
  return (
    <div>
      <Schedule cookies = {cookies} ></Schedule>
    </div>
    
  );
}

export default Workout;