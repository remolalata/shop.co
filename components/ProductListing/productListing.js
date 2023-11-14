import { useMainContext } from "@/context/MainContext";

import Product from "./product";

const ProductListing = props => {
    const { state } = useMainContext();

    const filterBy = props.filterBy ? props.filterBy : "";
    const products = state.products;

    const filteredProducts = () => {
        if (filterBy === "") {
            return products;
        }

        const filtered = products.filter(product => product.tags.includes(filterBy));
        return filtered.slice(0, 4);
    };

    return (
        <>
            <ul className={`grid grid-cols-3 gap-x-5 ${props.customClasses}`}>
                {filteredProducts().map((product) => (
                    <li key={product.id} className="mr-4 md:mr-0">
                        <Product product={product} />
                    </li>
                ))}
            </ul>
        </>

    )
}

export default ProductListing