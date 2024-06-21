import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Tracker1 from "../components/tracker1/Tracker1"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <Traker1/>
            }         
        
    ]
},
])
