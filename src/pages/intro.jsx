import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';
import { Select } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Title from "../components/title";

const dayOptions=[
    "1 day",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "7 days"
]
const goalOptions=[
    "Muscle building",
    "Strength building",
    "Powerlifting",
]


function Intro() {
  return (
      <div className = "w-full">
        <Title></Title>
        <Stack spacing={4} className = "flex items-center">

        <h1 className = "text-xl w-1/2 text-center">
            How many days a week do you want to work out? 
        </h1>
        <div className = "w-1/4">
        <Select placeholder="Select days" size="lg" variant="filled">
            {dayOptions.map((value, index) => {
                return <option value={index+1}>{value}</option>
                })}
                </Select>
                </div>

            <h1 className = "text-xl">
            What is your main goal? 
        </h1>
        <div className = "w-1/4">
        <Select placeholder='Choose goal' size='lg' variant='filled'>
            {goalOptions.map((value,index)=>{
                return <option value={index+1}>{value}</option>
                })}
                </Select>
                </div>
                </Stack>
                <div className = "h-1/2 flex justify-center m-10">
                <div className = "flex items-end"> <Button></Button></div>
                </div>
                </div>
                );
            }

export default Intro;