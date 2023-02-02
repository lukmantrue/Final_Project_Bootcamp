import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

import { Provider } from "react-redux";

import store from '../store';



const router = createBrowserRouter([
    {
      path: '/',
      element:<Home/>,
      children:[
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/login',
            element:<Login/>
        },
      ],
    },
]);


const makeRouter = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

export default makeRouter;