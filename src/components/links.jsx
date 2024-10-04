import { Link } from "react-router-dom";

function Links () {
    return(
        <>
        <div>
      <h2>Start your new workout!</h2>
      <Link to="/workout" relative="path" className = "underline text-blue-600">Go to workout page</Link>
      </div>
      <div>
        <Link to="/intro" relative="path" className = "underline text-blue-600">Go to intro page</Link>
        </div>
        </>
    )
    
}

export default Links;