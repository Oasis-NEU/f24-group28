import * as React from "react";
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Workout from "./pages/Workout";
import Intro from "./pages/intro";
import Links from "./components/links"
import "./output.css";
import { useCookies } from 'react-cookie'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from "react-cookie";

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <main.jsx/>
//     </ChakraProvider>
//   )
// }


const router = createBrowserRouter([
  {
    path: "/",
    element: <Links></Links>
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
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </ChakraProvider>
  </React.StrictMode>
);

//const [cookies, getCookies] = useCookies(['user'])
//if(document.location.href != "http://localhost:5174/intro" && cookies.inx==undefined){
  //document.location = "./intro"
//}