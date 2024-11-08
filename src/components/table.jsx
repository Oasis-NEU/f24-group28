import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from '@chakra-ui/react';

function WorkoutTable({ dayData }) {
  console.log('Initial dayData:', dayData); // Log the entire structure

  const entries = Object.entries(dayData); // Get entries from the dictionary
  console.log('Entries:', entries); // Log entries

  const tableData = entries.flatMap(([day, dayExercises]) => {
    console.log('Processing day:', day, 'Data:', dayExercises); // Log each day's data

    // Check if the dayExercises is an array
    if (Array.isArray(dayExercises)) {
      // Check if the day contains a rest day
      if (dayExercises.includes('rest')) {
        console.log(`Adding Rest Day entry for ${day}`);
        return [{
          day,
          exercise: 'Rest Day',
          sets: '',
          reps: '',
          isFirstInDay: true,
          isLastInDay: true,
        }];
      } else {
        // If dayExercises is a workout array
        return dayExercises.map((exerciseData, idx) => {
          console.log('Exercise Data:', exerciseData); // Log exercise data
          if (Array.isArray(exerciseData) && exerciseData.length === 3) {
            const [exercise, sets, reps] = exerciseData;
            console.log(`Adding exercise: ${exercise}, Sets: ${sets}, Reps: ${reps}`);
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
            return null; // Return null if the data format is unexpected
          }
        }).filter(Boolean); // Filter out null values
      }
    } else {
      console.warn(`Unexpected format for dayExercises on ${day}:`, dayExercises);
      return []; // Return empty if the structure is not as expected
    }
  });

  console.log('Final tableData:', tableData); // Log the final flattened table data

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Workout Plan</h1>
      </div>
      <Box className="w-full max-w-4xl">
        <Table variant="simple">
          <Thead>
            <Tr borderBottom="2px solid" borderColor="gray.400">
              <Th>Day #</Th>
              <Th>Exercise</Th>
              <Th>Sets</Th>
              <Th>Reps</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.length === 0 ? (
              <Tr>
                <Td colSpan="4" textAlign="center">No data available</Td>
              </Tr>
            ) : (
              tableData.map((row, index) => (
                <Tr
                  key={index}
                  borderBottom={row.isLastInDay ? '2px solid' : '1px solid'}
                  borderColor={row.isLastInDay ? 'gray.200' : 'gray.200'}
                >
                  <Td>{row.isFirstInDay ? row.day : ''}</Td>
                  <Td>{row.exercise}</Td>
                  <Td>{row.sets}</Td>
                  <Td>{row.reps}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

export default WorkoutTable;