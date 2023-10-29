import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    return (
        <div className="bg-white">
            <div className="container py-6 flex items-center space-x-10">
                <div className="logo">
                    <Image src="/images/logo.svg" alt="Shop.co" width={160} height={22} />
                </div>
                <div className="menu">
                    <nav>
                        <ul className="flex items-center justify-between space-x-6">
                            <li>
                                <Link href="#">Shop</Link>
                            </li>
                            <li>
                                <Link href="#">On Sale</Link>
                            </li>
                            <li>
                                <Link href="#">New Arrivals</Link>
                            </li>
                            <li>
                                <Link href="#">Brands</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="search flex-grow">
                    <div className="search-input-group py-3 px-4 flex items-center space-x-3 rounded-3xl">
                        <Image src="/images/icons/search-icon.svg" width={24} height={24} />
                        <input
                            text="text"
                            placeholder="Search for products..."
                            className="w-full hover:bg-transparent hover:outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="user-menu flex items-center justify-between space-x-4">
                    <Link href="#">
                        <Image src="/images/icons/cart-icon.svg" width={24} height={24} />
                    </Link>
                    <Link href="#">
                        <Image src="/images/icons/account-icon.svg" width={24} height={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;