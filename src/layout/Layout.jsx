import { Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
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

export default Layout