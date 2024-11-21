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
  Button, // Import Button component from Chakra UI
} from '@chakra-ui/react';

// Import necessary icons
import { FaTrashAlt, FaCheck, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function WorkoutTable({ dayData, updateExercise, deleteExercise }) {
  const entries = Object.entries(dayData);

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white w-full items-center">
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">Workout Plan</h1>
      </div>
      <Box className="w-full max-w-4xl overflow-x-auto">
        <Table variant="simple" style={{ tableLayout: 'fixed' }}>
          <Thead>
            <Tr borderBottom="2px solid" borderColor="gray.400">
              <Th style={{ width: '10%', whiteSpace: 'nowrap' }}>Day #</Th>
              <Th style={{ width: '40%', whiteSpace: 'nowrap' }}>Exercise</Th>
              <Th style={{ width: '15%', whiteSpace: 'nowrap' }}>Sets</Th>
              <Th style={{ width: '15%', whiteSpace: 'nowrap' }}>Reps</Th>
              <Th style={{ width: '20%' }}></Th> {/* Empty header for Actions column */}
            </Tr>
          </Thead>
          <Tbody>
            {tableData.length === 0 ? (
              <>
                <Tr>
                  <Td colSpan="5" textAlign="center">
                    No data available
                  </Td>
                </Tr>
                {/* Added button when no data is available */}
                <Tr>
                  <Td colSpan="5" textAlign="center">
                    <Button as={Link} to="/intro" colorScheme="blue" mt={4}>
                      Make Your Workout Plan
                    </Button>
                  </Td>
                </Tr>
              </>
            ) : (
              tableData.map((row, index) => (
                <Row
                  key={index}
                  index={index}
                  rowData={row}
                  updateExercise={updateExercise}
                  deleteExercise={deleteExercise}
                />
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

function Row({ index, rowData, updateExercise, deleteExercise }) {
  const [isEditing, setIsEditing] = useState(false);
  const [exercise, setExercise] = useState(rowData.exercise);
  const [sets, setSets] = useState(rowData.sets);
  const [reps, setReps] = useState(rowData.reps);

  useEffect(() => {
    // Update state when rowData changes
    setExercise(rowData.exercise);
    setSets(rowData.sets);
    setReps(rowData.reps);
  }, [rowData]);

  if (rowData.exercise === 'Rest Day') {
    return (
      <Tr
        key={index}
        borderBottom={rowData.isLastInDay ? '2px solid' : '1px solid'}
        borderColor={rowData.isLastInDay ? 'gray.200' : 'gray.200'}
      >
        <Td style={{ width: '10%' }}>{rowData.isFirstInDay ? rowData.day : ''}</Td>
        <Td style={{ width: '40%' }}>{rowData.exercise}</Td>
        <Td style={{ width: '15%' }}>{rowData.sets}</Td>
        <Td style={{ width: '15%' }}>{rowData.reps}</Td>
        <Td style={{ width: '20%' }}></Td>
      </Tr>
    );
  }

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
      <Td style={{ width: '10%' }}>{rowData.isFirstInDay ? rowData.day : ''}</Td>
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
            <button onClick={handleDeleteClick} className="mr-4 text-red-500">
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
