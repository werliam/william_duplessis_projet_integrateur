import { Outlet } from "react-router"
import { Link } from "react-router"

function Layout() {

    return (
        <>

            <nav>
                <Link to="/">TableauDeBord</Link>
                |
                <Link to="/listeVille">ListeVille</Link>
                |
                <Link to="/Ville">Ville</Link> 
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>Votre meteo favorite</footer>
        </>
    )
}
export default Layout