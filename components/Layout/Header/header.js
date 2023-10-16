import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button/button";

const Header = () => {
    return (
        <header>
            <div className="bg-black">
                <div className="container relative px-4 py-2.5 text-white text-center">
                    Sign up and get 20% off to your first order. <Link href="#" className="font-medium underline">Sign Up Now</Link>

                    <div className="absolute right-0 top-2/4 w-5 h-5 translate-y-[-50%]">
                        <Button>
                            <Image src="/images/icons/close.svg" alt="Shop.co" width={20} height={20} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container">
                    <Image src="/images/logo.svg" alt="Shop.co" width={159} height={95} layout="responsive" />
                </div>
            </div>
        </header>
    )
}

export default Header;