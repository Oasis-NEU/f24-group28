function Button(props) {

    // function onChange(newName) {
    //   setCookie('name', newName);
    // }
    const handleClick = () => {
            const dayDropdownInput = document.getElementById("DayDropdownInput");
            const goalDropdownInput = document.getElementById("GoalDropdownInput");
    
            // Get the current value of dayDropdownInput, convert to a number and add 1
            const dayValue = parseInt(dayDropdownInput.value, 10); // Convert to integer
            const incrementedDayValue = dayValue + 1; // Increment by 1
    
            // Get the value of goalDropdownInput
            const goalValue = goalDropdownInput.value;
    
            // Create cookie value as a string with incremented day value and goal value
            const cookieValue = `${incrementedDayValue}${goalValue}`;
        props.setCookie("input", cookieValue)
        console.log(cookies.input)
        //console.log(dayDropdownInput.value + "" + goalDropdownInput.value)
        //console.log(cookies.input)
    }
    //const handleClick = () => {
        //const dayDropdownInput = document.getElementById("DayDropdownInput")
        //const goalDropdownInput = document.getElementById("GoalDropdownInput")
        //const days = 5;
        //var date = new Date();
        //date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        //var expires = "; expires=" + date.toUTCString();
        //console.log("Day: " + dayDropdownInput.value);
        //console.log("Goal index: " + goalDropdownInput.value);
        //document.cookie = "input=" + dayDropdownInput.value + " " + goalDropdownInput.value + expires + "; path=/"
        return (
            <button type="button" className = "p-8 bg-gray-100 text-gray-800 text-3xl w-80" onClick = {handleClick}>Submit</button>     
        );
    }
    export default Button;

