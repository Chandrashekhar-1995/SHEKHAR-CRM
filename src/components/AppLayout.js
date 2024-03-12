import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Help from "./Help";
import Footer from "./Footer";
import Error from "./Error";

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children :[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/help",
        element: <Help/>,
      },
    ],
    errorElement: <Error/>,
}
])

export default AppLayout

