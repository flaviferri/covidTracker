import NavbarHome from "../components/Seccions/Header/navbar/Navbar";
import Homepage from "../pages/Homepage";
import "../styles/main.scss";


const Layouthomepage = () => {
    return (
        <>  

            <main>
                <NavbarHome />
                <Homepage />
            </main>
        </>
    )
}

export default Layouthomepage;