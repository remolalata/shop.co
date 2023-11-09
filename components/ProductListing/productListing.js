import { useMainContext } from "@/context/MainContext";
import { getProductListingHeading } from "@/utils/utils";

import Product from "./product";

const ProductListing = props => {
    const { state } = useMainContext();

    const filterBy = props.filterBy ? props.filterBy : "";
    const products = state.products;
    const heading = getProductListingHeading(filterBy);

    const filteredProducts = () => {
        if (filterBy === "") {
            return products;
        }

        return products.filter(product => product.tags.includes(filterBy))
    }

    return (
        <div className="container px-4">
            <h2 className="font-integral-bold text-5xl mb-14 text-center">{heading}</h2>

            <ul className="flex items-center justify-between">
                {filteredProducts().map((product, index) => (
                    <li key={product.id}>
                        <Product product={product} />
                    </li>
                ))}
            </ul>

        </div>

    )
}

export default ProductListing