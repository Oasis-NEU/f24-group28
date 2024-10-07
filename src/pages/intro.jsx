import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';
import { Select } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Title from "../components/title";
import DayDropdown from '../components/dayDropdown';
import GoalDropdown from '../components/goalDropdown';


function Intro() {
  return (
      <div className = "w-full">
        <Title></Title>
        <Stack spacing={4} className = "flex items-center">
        <h1 className = "text-xl w-1/2 text-center">
            How many days a week do you want to work out? 
        </h1>
       <DayDropdown></DayDropdown>
            <h1 className = "text-xl">
            What is your main goal? 
        </h1>
        <GoalDropdown></GoalDropdown>
        </Stack>
        <div className = "h-1/2 flex justify-center m-10">
        <div className = "flex items-end"> <Link to="/workout" relative="path"><Button></Button></Link></div>
        </div>
        </div>
        );
    }

export default Intro;