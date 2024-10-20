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
  // Parse the dayData into a flat array for the table
  const tableData = dayData.flatMap((dayExercises, dayIndex) => {
    // Check if the day is a rest day
    if (dayExercises.length === 1 && dayExercises[0].toLowerCase() === 'rest') {
      return [{
        day: dayIndex + 1,
        exercise: 'Rest Day',
        sets: '',
        reps: '',
        isFirstInDay: true,
        isLastInDay: true,
      }];
    } else {
      // For each exercise in the day
      return dayExercises.map((exerciseData, idx) => {
        const [exercise, sets, reps] = exerciseData;
        return {
          day: dayIndex + 1,
          exercise: exercise,
          sets: sets,
          reps: reps,
          isFirstInDay: idx === 0,
          isLastInDay: idx === dayExercises.length - 1,
        };
      });
    }
  });

  return (
    <Box>
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
          {tableData.map((row, index) => (
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
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default WorkoutTable;
