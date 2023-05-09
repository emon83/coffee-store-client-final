import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './components/Errorpage/ErrorPage';
import Home from './components/Home/Home';
import AddCoffee from './components/AddCoffee/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee';
import DetailsCoffee from './components/DetailsCoffee/DetailsCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home/>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/detailsCoffee/:id",
        element: <DetailsCoffee/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/addCoffee",
        element: <AddCoffee/>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
