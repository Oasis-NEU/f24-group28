import * as React from "react";
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Workout";
import "./output.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <h2>Start your new workout!</h2>
      <Link to="/workout" relative="path">Go to workout page</Link>
      </div>,
    
  },
  {
    path: "/workout",
    element: <Home></Home>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);