import { CookiesProvider, useCookies } from 'react-cookie'

function WorkoutButton() {
    const [cookies, setCookie] = useCookies(['user'])
    const handleClick = () => {
        console.log(cookies.get("input"))
    }
    return (
        <button type="button" className = "p-8 bg-gray-100 text-gray-800 text-3xl w-80" onClick = {handleClick}>Submit</button>     
    );
  }
  export default WorkoutButton;