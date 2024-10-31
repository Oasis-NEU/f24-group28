import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button';
import WorkoutButton from '../components/workoutButton';
import { CookiesProvider, useCookies } from 'react-cookie'
import Schedule from '../components/schedule';
import WorkoutTable from '../components/table';
import { recommendedData } from '../data';

function Workout() {
  const [cookies, setCookie] = useCookies(['user'])
  let dayData = [];
// console.log("dayData:", Object.keys(data[(cookies.input).toString()[0]][(cookies.input).toString()[1]]).length)
let lastCookie = 0;
// for(let i = 1; i<=14; i++){
//   setCookie('days{i}', data[(cookies.input)[0]][(cookies.input)[1]][i], { path: "/"})
//   if(cookies.name){
//     lastCookie=i;
//     break;
//   }
// }
// console.log(lastCookie)
console.log(recommendedData)
  // for(let i = 1; i<=Object.keys(data[(cookies.input).toString()[0]][(cookies.input).toString()[1]]).length; i++){
    //dayData.push(data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][i])
    // console.log(data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][i])
  // }
  // console.log(dayData)
  // const day1 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][1]
  // const day2 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][2]
  // const day3 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][3]
  // const day4 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][4]
  // const day5 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][5]
  // const day6 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][6]
  // const day7 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][7]
  return (
    //className = "w-full"
    <div>
      {/* <Schedule cookies = {cookies} ></Schedule> */}
    <WorkoutTable dayData= {recommendedData} />
    </div>
    
  );
}

export default Workout;