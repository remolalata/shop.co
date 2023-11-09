import { useMainContext } from "@/context/MainContext";
import { setDisplayTopbar } from "@/actions/mainActions";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button/button";

import { CLOSE_WHITE_ICON_URL } from "@/constants/imagePaths";

const TopBar = () => {
    const { state, dispatch } = useMainContext();

    const handleDisplayTopBar = () => {
        dispatch(setDisplayTopbar(!state.displayTopBar));
    }

    return (
        <div className={`bg-black ${state.displayTopBar ? 'visible' : 'hidden'}`}>
            <div className="container relative px-4 py-2.5 text-white text-center text-xs md:text-sm">
                Sign up and get 20% off to your first order. {" "}
                <Link href="#" className="font-medium underline">
                    Sign Up Now
                </Link>
                <div className="absolute right-4 top-2/4 w-5 h-5 translate-y-[-50%] hidden md:block">
                    <Button onClick={handleDisplayTopBar}>
                        <Image
                            src={CLOSE_WHITE_ICON_URL}
                            width={24}
                            height={24}
                            alt=""
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;