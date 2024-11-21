//components/button.jsx
import { recommendedData, updatePersonalizedData } from "../data";


function Button(props) {
    const handleClick = () => {
        console.log("rteet")
            const dayDropdownInput = document.getElementById("DayDropdownInput");
            const goalDropdownInput = document.getElementById("GoalDropdownInput");
    
            // Get the current value of dayDropdownInput, convert to a number and add 1
            const dayValue = parseInt(dayDropdownInput.value, 10); // Convert to integer
            const incrementedDayValue = dayValue + 1; // Increment by 1
            // Get the value of goalDropdownInput
            const goalValue = goalDropdownInput.value;
            console.log(goalValue, incrementedDayValue)

            for(let i = 1; i<=Object.keys(recommendedData[incrementedDayValue][goalValue]).length; i++){
                console.log(recommendedData[incrementedDayValue][goalValue][i])
                console.log(recommendedData[incrementedDayValue][goalValue])
                updatePersonalizedData(recommendedData[incrementedDayValue][goalValue])
            }
    }
        return (
            <button type="button" className = "p-8 bg-gray-100 text-gray-800 text-3xl w-80" onClick = {handleClick}>Submit</button>     
        );
    }
    export default Button;

