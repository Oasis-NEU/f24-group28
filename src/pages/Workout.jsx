// pages/Workout.jsx
import React, { useState, useEffect } from 'react';
import WorkoutTable from '../components/table';
import { personalizedData } from '../data';

function Workout() {
  const [personalizedStateData, setPersonalizedStateData] = useState({});

  useEffect(() => {
    // Initialize state with personalizedData
    setPersonalizedStateData({ ...personalizedData });
  }, []);

  const updateExercise = (day, originalExercise, newExercise, newSets, newReps) => {
    if (personalizedStateData[day]) {
      personalizedStateData[day] = personalizedStateData[day].map((exerciseData) => {
        if (Array.isArray(exerciseData) && exerciseData[0] === originalExercise) {
          return [newExercise, newSets, newReps];
        }
        return exerciseData;
      });
      setPersonalizedStateData({ ...personalizedStateData });
      console.log(`Updated personalizedData for Day ${day}:`, personalizedStateData[day]);
    }
  };

  const deleteExercise = (day, exerciseToDelete) => {
    if (personalizedStateData[day]) {
      personalizedStateData[day] = personalizedStateData[day].filter(
        (exData) => exData[0] !== exerciseToDelete
      );
      setPersonalizedStateData({ ...personalizedStateData });
      console.log(`Deleted exercise from Day ${day}:`, personalizedStateData[day]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white w-full justify-center">
      <div className="w-full max-w-4xl flex justify-center">
        <WorkoutTable
          dayData={personalizedStateData}
          updateExercise={updateExercise}
          deleteExercise={deleteExercise}
        />
      </div>
    </div>
  );
}

export default Workout;
