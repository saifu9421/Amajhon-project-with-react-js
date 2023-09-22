import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/products/Products';
import Product from '../pages/Product/Product';
import DashboardLayout from '../Layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';

const router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout></MainLayout>,
      children:[
        {
        path:"/",
        element: <Home></Home>,
        },
        {
           path:"/products",
           loader:()=> fetch(`https://dummyjson.com/products`),
           element: <Products></Products>,
        },{
            path:"/dashboard",
            element: <DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:"/dashboard",
                    element:<Dashboard></Dashboard>,
                },
                {
                    path:"/dashboard/profile",
                    element:<Profile></Profile>,
                },
                {
                    path:"/dashboard/editprofile",
                    element:<EditProfile></EditProfile>,
                },
            ]
        },
        {
          path:"/product/:id",
          loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`),
          element: <Product></Product>,
        },
      ]
    },
]);

export default router;