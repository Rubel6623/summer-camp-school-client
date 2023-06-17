import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import PrivateRoute from "./PrivateRoute";


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
        element:<PrivateRoute><AllClasses></AllClasses></PrivateRoute>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'myCart',
        element:<MyCart></MyCart>
      },
      {
        path:'allUsers',
        element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path:'addClass',
        element:<PrivateRoute><AddClass></AddClass></PrivateRoute>
      }
    ]
  }
]);