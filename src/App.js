import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Layout/Main';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import AddService from './Components/AddService/AddService';
import MyReviews from './Components/MyReviews/MyReviews';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
          path: "login",
          element: <Login></Login>,
          errorElement: <Error></Error>
        },
        {
          path: "/register",
          element: <Register></Register>,
          errorElement: <Error></Error>
        },


        {
          path: "blog",
          element: <Blog></Blog>,
          errorElement: <Error></Error>
        },
        {
          path: "/",
          loader :() => fetch(`https://b6a11-service-review-server-side-kowcher99.vercel.app/service`),
          element: <Home></Home>,
          errorElement: <Error></Error>
        },
        {
          path: "home",
          loader :() => fetch(`https://b6a11-service-review-server-side-kowcher99.vercel.app/service`),
          element: <Home></Home>,
          errorElement: <Error></Error>
        },
        {
          path: "addservice",
          element: <PrivateRoute><AddService></AddService></PrivateRoute> ,
          errorElement: <Error></Error>
        },
        {
          path: "myreview",
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
          errorElement: <Error></Error>
        },
        {
          path: "services",
          element: <Services></Services>,
          errorElement: <Error></Error>
        },
        { path: '*', element: <Error/>},
      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
