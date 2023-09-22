import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/products/Products';
import Product from '../pages/Product/Product';

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
            element: <div>Dashboard</div>
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