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

  const tableData = [];

  // Iterate over programs
  Object.entries(dayData).forEach(([programNumber, weeks]) => {
    console.log('Processing Program:', programNumber);
    // Iterate over weeks
    Object.entries(weeks).forEach(([weekNumber, days]) => {
      console.log('Processing Week:', weekNumber);
      // Iterate over days
      Object.entries(days).forEach(([dayNumber, dayExercises]) => {
        console.log('Processing Day:', dayNumber, 'Data:', dayExercises);

        if (Array.isArray(dayExercises)) {
          if (dayExercises.includes('rest')) {
            // Rest day
            tableData.push({
              program: programNumber,
              week: weekNumber,
              day: dayNumber,
              exercise: 'Rest Day',
              sets: '',
              reps: '',
            });
          } else {
            // Exercises
            dayExercises.forEach((exerciseData) => {
              if (Array.isArray(exerciseData) && exerciseData.length === 3) {
                const [exercise, sets, reps] = exerciseData;
                tableData.push({
                  program: programNumber,
                  week: weekNumber,
                  day: dayNumber,
                  exercise,
                  sets,
                  reps,
                });
              } else {
                console.warn(
                  `Unexpected exercise data format for Program ${programNumber}, Week ${weekNumber}, Day ${dayNumber}:`,
                  exerciseData
                );
              }
            });
          }
        } else {
          console.warn(
            `Unexpected format for dayExercises on Program ${programNumber}, Week ${weekNumber}, Day ${dayNumber}:`,
            dayExercises
          );
        }
      });
    });
  });

  console.log('Final tableData:', tableData);

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Program</Th>
            <Th>Week</Th>
            <Th>Day</Th>
            <Th>Exercise</Th>
            <Th>Sets</Th>
            <Th>Reps</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((row, index) => (
            <Tr key={index}>
              <Td>{row.program}</Td>
              <Td>{row.week}</Td>
              <Td>{row.day}</Td>
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