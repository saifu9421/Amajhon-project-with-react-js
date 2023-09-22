import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';
import Products from './pages/products/Products';
import router from './Route/Route';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<div>This is my first home router</div>
//   },{
//     path:"/products",
//     element:<div>Product route details</div>
//   },{
//     path:"/about",
//     element: <div>about route hitted</div>
//   },{

//   }, 
// ]);
// const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<section>
//         <div>
//           this is a fixed items
//         </div>
//         <Outlet></Outlet>
//       </section>,

//       children:[
//           {
//             path:'/',
//             element:<div>This is route</div>
//           },{
//             path:'/products',
//             element:<div>products</div>
//           },
//       ]
//     }
// ]);

// const router = createBrowserRouter([
//     {
//       path:"/",
//       element: <MainLayout></MainLayout>,
//       children:[
//         {
//         path:"/",
//         element: <Home></Home>,
//         },
//         {
//            path:"/products",
//            element: <Products></Products>,
//         },
//       ]
//     },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
