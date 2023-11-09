import { useMainContext } from "@/context/MainContext";
import { setToggleMenu, setDisplayMobileSearchBar } from "@/actions/mainActions";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button/button";
import SearchInputGroup from "@/components/SearchInputGroup/searchInputGroup";

import menuItems from "@/constants/menuConfig";

import { LOGO_URL, HAMBURGER_ICON_URL, SEARCH_MOBILE_ICON_URL, CART_ICON_URL, ACCOUNT_ICON_URL } from "@/constants/imagePaths";

const Navigation = () => {
    const { state, dispatch } = useMainContext();

    const handleToggleMenuClick = () => {
        dispatch(setToggleMenu(!state.setToggleMenu))
    }

    const handleDisplayMobileSearchBar = () => {
        dispatch(setDisplayMobileSearchBar(!state.displayMobileSearchBar));
    }

    return (
        <div className="bg-white">
            <div className="container px-4 py-6 flex items-center gap-x-10">
                <div className="mobile-menu md:hidden">
                    <Button onClick={handleToggleMenuClick}>
                        <Image src={HAMBURGER_ICON_URL} width={24} height={24} alt="" />
                    </Button>
                </div>
                <div className="logo">
                    <Image src={LOGO_URL} alt="Shop.co" width={160} height={22} alt="" />
                </div>
                <div className="hidden md:block">
                    <nav>
                        <ul className="flex items-center justify-between space-x-6">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="search flex-grow">
                    <div className="hidden md:block">
                        <SearchInputGroup />
                    </div>
                </div>
                <div className="user-menu flex items-center justify-between space-x-4">
                    <Button customClasses="md:hidden" onClick={handleDisplayMobileSearchBar}>
                        <Image src={SEARCH_MOBILE_ICON_URL} width={24} height={24} alt="" />
                    </Button>
                    <Link href="#">
                        <Image src={CART_ICON_URL} width={24} height={24} alt="" />
                    </Link>
                    <Link href="#">
                        <Image src={ACCOUNT_ICON_URL} width={24} height={24} alt="" />
                    </Link>
                </div>
            </div>
            
            <div className="container px-4 md:hidden">
                {state.displayMobileSearchBar && <SearchInputGroup />}
            </div>
        </div>
    )
}

export default Navigation;