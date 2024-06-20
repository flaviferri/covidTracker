import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../layout/Layout";
import  Tracker3 from "../pages/Tracker3"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <Homepage/>
            },   
            {
                path: "/tracker3",
                element: <Tracker3/>
            }      
        
    ]
},
])
