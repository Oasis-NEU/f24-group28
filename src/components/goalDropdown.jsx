import { Select } from '@chakra-ui/react'

const goalOptions=[
    "Functional hypertrophy",
    "Hypertrophy",
    "Strength",
]

function GoalDropdown () {
    return (
        <div className = "w-1/4">
        <Select id = "GoalDropdownInput" placeholder='Choose goal' size='lg' variant='filled'>
            {goalOptions.map((value,index)=>{
                return <option value={index+1}>{value}</option>
                })}
                </Select>
                </div>
                )
            }
    
export default GoalDropdown;