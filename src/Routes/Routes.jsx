import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import App from "../App";


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/instructor',
        element:<Instructors></Instructors>
      },
      {
        path:'/classes',
        element:<AllClasses></AllClasses>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/app',
        element:<PrivateRoute><App></App></PrivateRoute>
      }
    ]
  },
]);