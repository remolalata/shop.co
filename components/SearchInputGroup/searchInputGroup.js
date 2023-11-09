import Image from "next/image";

import { SEARCH_DESKTOP_ICON_URL } from "@/constants/imagePaths";

const SearchInputGroup = () => {
    return (
        <div
            className="search-input-group py-3 px-4 flex items-center space-x-3 rounded-3xl">
            <Image src={SEARCH_DESKTOP_ICON_URL} width={24} height={24} alt="" />
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full hover:bg-transparent hover:outline-none focus:outline-none"
            />
        </div >
    )
}

export default SearchInputGroup;