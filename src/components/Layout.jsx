import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="mb-10">
                <Footer />
            </footer>
        </>
    )
}

export default Layout;