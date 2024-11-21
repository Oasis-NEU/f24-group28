// components/table.jsx
import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
} from '@chakra-ui/react';

// Import necessary icons
import { FaTrashAlt, FaCheck, FaEdit, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WorkoutTable({ dayData, updateExercise, deleteExercise, addExercise }) {
  const entries = Object.entries(dayData);

  const [addingExercise, setAddingExercise] = useState(false);
  const [newExerciseData, setNewExerciseData] = useState({
    day: '',
    exercise: '',
    sets: '',
    reps: '',
  });

  const tableData = entries.flatMap(([day, dayExercises]) => {
    if (Array.isArray(dayExercises)) {
      if (dayExercises.includes('rest')) {
        return [
          {
            day,
            exercise: 'Rest Day',
            sets: '',
            reps: '',
            isFirstInDay: true,
            isLastInDay: true,
          },
        ];
      } else {
        return dayExercises
          .map((exerciseData, idx) => {
            if (Array.isArray(exerciseData) && exerciseData.length === 3) {
              const [exercise, sets, reps] = exerciseData;
              return {
                day,
                exercise,
                sets,
                reps,
                isFirstInDay: idx === 0,
                isLastInDay: idx === dayExercises.length - 1,
              };
            } else {
              console.warn(`Unexpected exercise data format for ${day}:`, exerciseData);
              return null;
            }
          })
          .filter(Boolean);
      }
    } else {
      console.warn(`Unexpected format for dayExercises on ${day}:`, dayExercises);
      return [];
    }
  });

  // Sort tableData so that the new exercise (if any) appears at the top
  let displayData = [...tableData];
  if (addingExercise) {
    displayData.unshift({
      day: newExerciseData.day,
      exercise: newExerciseData.exercise,
      sets: newExerciseData.sets,
      reps: newExerciseData.reps,
      isFirstInDay: false,
      isLastInDay: false,
      isNew: true,
    });
  }

  const handleAddExercise = () => {
    setAddingExercise(true);
    setNewExerciseData({
      day: '',
      exercise: '',
      sets: '',
      reps: '',
    });
  };

  const handleCancelAdd = () => {
    setAddingExercise(false);
  };

  const handleSaveNewExercise = () => {
    if (newExerciseData.day && newExerciseData.exercise) {
      addExercise(newExerciseData.day, newExerciseData.exercise, newExerciseData.sets, newExerciseData.reps);
      setAddingExercise(false);
    } else {
      alert('Please enter the day and exercise name.');
    }
  };

  const handleNewExerciseChange = (field, value) => {
    setNewExerciseData({
      ...newExerciseData,
      [field]: value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white w-full items-center">
      <div className="text-center mt-4 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Workout Plan</h1>
          <Button onClick={handleAddExercise} colorScheme="teal" leftIcon={<FaPlus />}>
            Add Exercise
          </Button>
        </div>
        <Box className="w-full overflow-x-auto">
          <Table variant="simple" style={{ tableLayout: 'fixed' }}>
            <Thead>
              <Tr borderBottom="2px solid" borderColor="gray.400">
                <Th style={{ width: '10%', whiteSpace: 'nowrap' }}>Day #</Th>
                <Th style={{ width: '40%', whiteSpace: 'nowrap' }}>Exercise</Th>
                <Th style={{ width: '15%', whiteSpace: 'nowrap', textAlign: 'center' }}>Sets</Th>
                <Th style={{ width: '15%', whiteSpace: 'nowrap', textAlign: 'center' }}>Reps</Th>
                <Th style={{ width: '20%' }}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {displayData.length === 0 ? (
                <>
                  <Tr>
                    <Td colSpan="5" textAlign="center">
                      No data available
                    </Td>
                  </Tr>
                  <Tr>
                    <Td colSpan="5" textAlign="center">
                      <Button as={Link} to="/intro" colorScheme="blue" mt={4}>
                        Make Your Workout Plan
                      </Button>
                    </Td>
                  </Tr>
                </>
              ) : (
                displayData.map((row, index) => (
                  row.isNew ? (
                    <Tr key="new">
                      <Td style={{ width: '10%' }}>
                        <input
                          value={newExerciseData.day}
                          onChange={(e) => handleNewExerciseChange('day', e.target.value)}
                          className="text-black px-1 w-full"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </Td>
                      <Td style={{ width: '40%' }}>
                        <input
                          value={newExerciseData.exercise}
                          onChange={(e) => handleNewExerciseChange('exercise', e.target.value)}
                          className="text-black px-1 w-full"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </Td>
                      <Td style={{ width: '15%' }}>
                        <input
                          value={newExerciseData.sets}
                          onChange={(e) => handleNewExerciseChange('sets', e.target.value)}
                          className="text-black px-1 w-full text-center"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </Td>
                      <Td style={{ width: '15%' }}>
                        <input
                          value={newExerciseData.reps}
                          onChange={(e) => handleNewExerciseChange('reps', e.target.value)}
                          className="text-black px-1 w-full text-center"
                          style={{ boxSizing: 'border-box' }}
                        />
                      </Td>
                      <Td style={{ width: '20%' }}>
                        <div className="flex justify-center">
                          <button onClick={handleCancelAdd} className="mr-8 text-red-500">
                            <FaTrashAlt size={18} />
                          </button>
                          <button onClick={handleSaveNewExercise} className="text-green-500">
                            <FaCheck size={18} />
                          </button>
                        </div>
                      </Td>
                    </Tr>
                  ) : (
                    <Row
                      key={index}
                      index={index}
                      rowData={row}
                      updateExercise={updateExercise}
                      deleteExercise={deleteExercise}
                    />
                  )
                ))
              )}
            </Tbody>
          </Table>
        </Box>
      </div>
    </div>
  );
}

function Row({ index, rowData, updateExercise, deleteExercise }) {
  const [isEditing, setIsEditing] = useState(false);
  const [exercise, setExercise] = useState(rowData.exercise);
  const [sets, setSets] = useState(rowData.sets);
  const [reps, setReps] = useState(rowData.reps);
  const [day, setDay] = useState(rowData.day);

  useEffect(() => {
    // Update state when rowData changes
    setExercise(rowData.exercise);
    setSets(rowData.sets);
    setReps(rowData.reps);
    setDay(rowData.day);
  }, [rowData]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    const day = rowData.day;
    deleteExercise(day, rowData.exercise);
    setIsEditing(false);
  };

  const handleDoneClick = () => {
    const day = rowData.day;
    updateExercise(day, rowData.exercise, exercise, sets, reps);
    setIsEditing(false);
  };

  return (
    <Tr
      key={index}
      borderBottom={rowData.isLastInDay ? '2px solid' : '1px solid'}
      borderColor={rowData.isLastInDay ? 'gray.200' : 'gray.200'}
    >
      <Td style={{ width: '10%' }}>{rowData.isFirstInDay ? day : ''}</Td>
      <Td style={{ width: '40%' }}>
        {isEditing ? (
          <input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="text-black px-1 w-full"
            style={{ boxSizing: 'border-box' }}
          />
        ) : (
          rowData.exercise
        )}
      </Td>
      <Td style={{ width: '15%' }}>
        {isEditing ? (
          <input
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="text-black px-1 w-full text-center"
            style={{ boxSizing: 'border-box' }}
          />
        ) : (
          <div className="text-center">{rowData.sets}</div>
        )}
      </Td>
      <Td style={{ width: '15%' }}>
        {isEditing ? (
          <input
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="text-black px-1 w-full text-center"
            style={{ boxSizing: 'border-box' }}
          />
        ) : (
          <div className="text-center">{rowData.reps}</div>
        )}
      </Td>
      <Td style={{ width: '20%' }}>
        {isEditing ? (
          <div className="flex justify-center">
            <button onClick={handleDeleteClick} className="mr-8 text-red-500">
              <FaTrashAlt size={18} />
            </button>
            <button onClick={handleDoneClick} className="text-green-500">
              <FaCheck size={18} />
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button onClick={handleEditClick} className="text-blue-500">
              <FaEdit size={18} />
            </button>
          </div>
        )}
      </Td>
    </Tr>
  );
}

export default WorkoutTable;
