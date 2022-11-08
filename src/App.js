import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Layout/Main';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';

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
        { path: '*', element: <Error/>},
      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
