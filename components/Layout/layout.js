import Header from "./Header/header";
import Footer from "./Footer/footer";

const Layout = ({ children }) => {
    return (
        <div className="antialiased">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;