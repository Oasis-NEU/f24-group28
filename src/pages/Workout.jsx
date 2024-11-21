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
        } else if (exerciseData === 'rest' && originalExercise === 'Rest Day') {
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
      personalizedStateData[day] = personalizedStateData[day].filter((exData) => {
        if (Array.isArray(exData)) {
          return exData[0] !== exerciseToDelete;
        } else if (exData === 'rest' && exerciseToDelete === 'Rest Day') {
          return false; // Remove rest day
        }
        return true;
      });
      setPersonalizedStateData({ ...personalizedStateData });
      console.log(`Deleted exercise from Day ${day}:`, personalizedStateData[day]);
    }
  };

  const addExercise = (day, exercise, sets, reps) => {
    if (personalizedStateData[day]) {
      if (personalizedStateData[day].includes('rest')) {
        // Remove 'rest' if present
        personalizedStateData[day] = [];
      }
      personalizedStateData[day].unshift([exercise, sets, reps]);
    } else {
      personalizedStateData[day] = [[exercise, sets, reps]];
    }
    setPersonalizedStateData({ ...personalizedStateData });
    console.log(`Added exercise to Day ${day}:`, personalizedStateData[day]);
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white w-full justify-center">
      <div className="w-full max-w-4xl flex justify-center">
        <WorkoutTable
          dayData={personalizedStateData}
          updateExercise={updateExercise}
          deleteExercise={deleteExercise}
          addExercise={addExercise}
        />
      </div>
    </div>
  );
}

export default Workout;
