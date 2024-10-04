import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';
import { Select } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

const dayOptions=[
    "1 day",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
]
const goalOptions=[
    "Muscle building",
    "Strength building",
    "Powerlifting",
]

function Intro() {
  return (
    <div>
        
      <div>

        <Stack spacing={4}>
        <h1 className = "text-2xl font-bold font-serif">Input your information below!</h1>

        <h1 className = "text-xl">
            How many days a week do you want to work out? 
        </h1>
            <Select placeholder=' ' size='lg' variant='filled'>
                {dayOptions.map((value,index)=>{
                    return <option value={index+1}>{value}</option>
                })}
  
            </Select>
            <h1 className = "text-xl">
            What is your main goal? 
        </h1>
            <Select placeholder=' ' size='lg' variant='filled'>
                <option value='1'>Muscle building</option>
                <option value='2'>Strength building</option>
                <option value='3'>Powerlifting</option>
            </Select>
        </Stack>
      </div>
    </div>
    
  );
}

export default Intro;