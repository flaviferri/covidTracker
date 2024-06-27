//import { Link, Outlet} from "react-router-dom"
//import Sidenav from "../components/navbar/Sidenav"

import { Link } from "react-router-dom";
import Homepage from "../pages/Homepage";
const LayoutHome = () => {
    return (
        <>  
            <nav><Link to="/trackers">Tracker</Link></nav>
            <main><Homepage /></main>
        </>
    )
}

export default LayoutHome