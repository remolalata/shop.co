import Link from "next/link";

import { useMainContext } from "@/context/MainContext";
import { getProductListingHeading } from "@/utils/utils";

import Product from "./product";
import { VIEW_ALL } from "@/constants/labelsConfig";

const ProductListing = props => {
    const { state } = useMainContext();

    const filterBy = props.filterBy ? props.filterBy : "";
    const products = state.products;
    const heading = getProductListingHeading(filterBy);

    const filteredProducts = () => {
        if (filterBy === "") {
            return products;
        }
    
        const filtered = products.filter(product => product.tags.includes(filterBy));
        return filtered.slice(0, 4);
    };

    return (
        <div className="container px-4">
            <h2 className="font-integral-bold text-5xl mb-14 text-center">{heading}</h2>

            <ul className="flex items-center justify-between">
                {filteredProducts().map((product) => (
                    <li key={product.id} className="mr-4 md:mr-0">
                        <Product product={product} />
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-center mt-9">
                <Link href="#" className="flex items-center justify-center w-full md:w-view-all h-view-all border border border-black/[0.10] rounded-3xl hover:bg-black hover:text-white">{VIEW_ALL}</Link>
            </div>
        </div>

    )
}

export default ProductListing