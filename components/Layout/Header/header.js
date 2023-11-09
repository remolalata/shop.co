import TopBar from "./TopBar/topbar";
import Navigation from "./Navigation/navigation";
import MobileMenu from "@/components/MobileMenu/mobileMenu";

const Header = () => {
    return (
        <header>
            <TopBar />
            <Navigation />
            <MobileMenu />
        </header>
    )
}

export default Header;