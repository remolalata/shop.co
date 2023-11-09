import { useMainContext } from "@/context/MainContext";
import { setToggleMenu } from "@/actions/mainActions";

import Link from "next/link";
import Image from "next/image";

import Button from "../Button/button";

import { LOGO_URL, CLOSE_BLACK_ICON_URL } from "@/constants/imagePaths";
import menuItems from "@/constants/menuConfig";

const MobileMenu = () => {
    const { state, dispatch } = useMainContext();

    const handleToggleMenuClick = () => {
        dispatch(setToggleMenu(!state.toggleMenu))
    }

    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 z-50 ${state.toggleMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-md`}
        >
            <div className="flex items-center justify-between px-2 py-4 mb-4 border-b border-gray-300">
                <Image src={LOGO_URL} width={160} height={22} alt="" />
                <Button onClick={handleToggleMenuClick}>
                    <Image src={CLOSE_BLACK_ICON_URL} width={24} height={24} alt="" />
                </Button>
            </div>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} className="px-2 py-2 block">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu;