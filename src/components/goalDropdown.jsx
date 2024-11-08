import { Select } from '@chakra-ui/react'

const goalOptions=[
    "Functional hypertrophy",
    "Hypertrophy",
    "Strength",
]

function GoalDropdown () {
    return (
        <div className="w-1/4">
            <Select 
                id="GoalDropdownInput" 
                placeholder="Choose goal" 
                size="lg" 
                variant="unstyled" 
                className="bg-transparent text-white border border-white p-2 rounded pl-4"
                style={{ textAlign: 'center', paddingLeft: '1rem', paddingTop: '5px' }}
            >
                {goalOptions.map((value, index) => {
                    return <option key={index} value={index+1} className="bg-gray-800 text-white text-center">{value}</option>
                })}
            </Select>
        </div>
    )
}

export default GoalDropdown;