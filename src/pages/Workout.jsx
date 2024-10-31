import React from 'react';
import WorkoutTable from '../components/table';
import { recommendedData } from '../data';

function Workout() {
  const mockData = {
    "1": [["Push-Ups", "3", "15"], ["Pull-Ups", "3", "10"]],
    "2": ["rest"],
    "3": [["Squats", "4", "12"], ["Lunges", "4", "10"]],
  };
  
  // Log recommendedData to verify its structure
  console.log('Recommended Data:', recommendedData);

  return (
    <div>
      <WorkoutTable dayData={recommendedData} />
    </div>
  );
}

export default Workout;
