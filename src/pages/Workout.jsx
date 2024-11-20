import React from 'react';
import WorkoutTable from '../components/table';
import { recommendedData, personalizedData, updatePersonalizedData } from '../data';

function Workout() {
  const mockData = {
    "1": [["Push-Ups", "3", "15"], ["Pull-Ups", "3", "10"]],
    "2": ["rest"],
    "3": [["Squats", "4", "12"], ["Lunges", "4", "10"]],
  };

  console.log('Personalized Data:', personalizedData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="w-full max-w-4xl mx-auto">
        <WorkoutTable dayData={personalizedData} />
      </div>
    </div>
  );
}

export default Workout;
