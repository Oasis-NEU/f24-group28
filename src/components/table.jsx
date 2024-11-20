import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
} from '@chakra-ui/react';

function WorkoutTable({ dayData }) {
  console.log('Initial dayData:', dayData);

  const entries = Object.entries(dayData);
  console.log('Entries:', entries);

  const tableData = entries.flatMap(([day, dayExercises]) => {
    if (Array.isArray(dayExercises)) {
      if (dayExercises.includes('rest')) {
        return [{
          day,
          exercise: 'Rest Day',
          sets: '',
          reps: '',
          isFirstInDay: true,
          isLastInDay: true,
        }];
      } else {
        return dayExercises.map((exerciseData, idx) => {
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
          }
          return null;
        }).filter(Boolean);
      }
    }
    return [];
  });

  return (
    <Box className="flex items-center justify-center w-full min-h-screen bg-gray-800 text-white">
      <Box maxW="4xl" w="full" mx="auto" p={6} textAlign="center">
        <Heading mb={8}>Workout Plan</Heading>
        <Table variant="simple" width="100%">
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
                  borderColor="gray.200"
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
    </Box>
  );
}

export default WorkoutTable;
