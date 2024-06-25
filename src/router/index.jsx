import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import Tracker1 from "../pages/Tracker1";
import Tracker2 from "../pages/Tracker2";
import Tracker3 from "../pages/Tracker3";

export const router = createBrowserRouter([
    {
        path: "/",
        
        element: <Layout/>,
        children: [
            
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
      ]
  },
  /*  {path: "/home",
    element: <Homepage/>
   } */
])
