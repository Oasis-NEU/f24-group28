import { Select } from '@chakra-ui/react'

const dayOptions=[
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
]

function DayDropdown() {
    const handleChange = (event) => {
        //console.log(event.target.value);
    }
    return (
        <div className = "w-1/4">
        <Select id = "DayDropdownInput" placeholder="Select days" size="lg" variant="filled" onChange = {handleChange}>
            {dayOptions.map((value, index) => {
                return <option value={index+1}>{value}</option>
                })}
                </Select>
                </div>
    ) 
}
export default DayDropdown;