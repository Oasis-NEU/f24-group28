

function Button() {
    const handleClick = () => {
        const dayDropdownInput = document.getElementById("DayDropdownInput")
        const goalDropdownInput = document.getElementById("GoalDropdownInput")
        const days = 5;
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
        console.log("Day: " + dayDropdownInput.value);
        console.log("Goal index: " + goalDropdownInput.value);
        document.cookie = "input=" + dayDropdownInput.value + " " + goalDropdownInput.value + expires + "; path=/"
    }
    return (
        <button type="button" className = "p-8 bg-gray-100 text-gray-800 text-3xl w-80" onClick = {handleClick}>Submit</button>     
    );
  }
  export default Button;