<<<<<<< HEAD
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

=======
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

>>>>>>> 28fb68d (striped table color and blue font color)
export default Layout