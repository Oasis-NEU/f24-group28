import React from 'react';
import WorkoutTable from '../components/table';
import { recommendedData, personalizedData, updatePersonalizedData} from '../data';

function Workout() {
  const updateExercise = (day, originalExercise, newExercise) => {
    if (personalizedData[day]) {
      personalizedData[day] = personalizedData[day].map((exerciseData) => {
        if (Array.isArray(exerciseData) && exerciseData[0] === originalExercise) {
          return [newExercise, exerciseData[1], exerciseData[2]];
        }
        return exerciseData;
      });
      console.log(`Updated personalizedData for Day ${day}:`, personalizedData[day]);
    }
  };
  
  // Log recommendedData to verify its structure
  // console.log('Recommended Data:', recommendedData);
  console.log('Personalized Data:', personalizedData);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="w-full max-w-4xl flex justify-center">
        <WorkoutTable dayData={personalizedData} updateExercise={updateExercise} />
      </div>
    </div>
  );
}

export default Workout;