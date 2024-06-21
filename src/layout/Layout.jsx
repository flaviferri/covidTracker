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

export default Layout