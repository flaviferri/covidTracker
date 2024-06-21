import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../layout/Layout";
<<<<<<< HEAD
import Tracker1 from "../pages/Tracker1";
import Tracker2 from "../pages/Tracker2";
import Tracker3 from "../pages/Tracker3";
=======
>>>>>>> 57e0ebc29771b9117cece8e667b91b5431f6117a

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <Homepage/>
<<<<<<< HEAD
            },
            {
                path: "/tracker1",
                element: <Tracker1/>
            },
            {
                path: "/tracker2",
                element: <Tracker2/>
            },
            {
                path: "/tracker3",
                element: <Tracker3/>
            }             
=======
            }         
>>>>>>> 57e0ebc29771b9117cece8e667b91b5431f6117a
        
    ]
},
])
