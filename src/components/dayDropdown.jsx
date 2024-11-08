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
        <div className="w-1/4">
            <Select 
                id="DayDropdownInput" 
                placeholder="Select days" 
                size="lg" 
                variant="unstyled" 
                onChange={handleChange} 
                className="bg-transparent text-white border border-white p-2 rounded pl-4"
                style={{ textAlign: 'center', paddingLeft: '1rem', paddingTop: '1px' }}
            >
                {dayOptions.map((value, index) => {
                    return <option key={index} value={index+1} className="bg-gray-800 text-white text-center">{value}</option>
                })}
            </Select>
        </div>
    ) 
}

export default DayDropdown;