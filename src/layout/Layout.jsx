import { Outlet} from "react-router-dom"
import Sidenav from "../components/navbar/Sidenav"

const Layout = () => {
    return (
        <>
            <Sidenav/>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    )
}

export default Layoutimport { Outlet} from "react-router-dom"
import Sidenav from "../components/navbar/Sidenav"

const Layout = () => {
    return (
        <>
            <Sidenav/>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    )
}

export default Layoutimport { Outlet} from "react-router-dom"
import Sidenav from "../components/navbar/Sidenav"
import TrackerCovid from "../components/Tracker-Overall/TrackerCovid"
import TrackerTop10 from "../components/Tracker-Top10/TrackerTop10"
import "./layoutcss.scss";

const Layout = () => {
    return (
        <>  
            <Sidenav />
            <div className="infoBox">
            <TrackerCovid/>
            <TrackerTop10/>
            </div>
            <main><Outlet /></main>
        </>
    )
}

export default Layout