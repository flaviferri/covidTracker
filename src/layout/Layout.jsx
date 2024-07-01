import { Outlet} from "react-router-dom"
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
            <section className="outlet">
            <Outlet />
            </section>
        </>
    )
}

export default Layout