// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Workout from "./pages/Workout";
import Intro from "./pages/intro";
import Links from "./components/links"
import "./output.css";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/intro" replace /> // Redirect to /intro
  },
  {
    path: "/workout",
    element: <Workout></Workout>
  },
  {
    path: "/intro",
    element: <Intro></Intro>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
