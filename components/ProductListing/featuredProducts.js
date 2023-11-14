import Link from "next/link";

import { useMainContext } from "@/context/MainContext";

import Product from "./product";

import { VIEW_ALL } from "@/constants/labelsConfig";

const FeautredProducts = props => {
    const { state } = useMainContext();

    const filterBy = props.filterBy ? props.filterBy : "new-arrival";
    const products = state.products;

    const filteredProducts = products.filter(product => product.tags.includes(filterBy)).slice(0, 4);

    return (
        <>
            <ul className="flex overflow-x-scroll">
                {filteredProducts.map((product, index) => (
                    <li className={`inline-block ${index === filteredProducts.length - 1 ? '' : 'mr-4'}`} key={index}>
                        <Product product={product} />
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-center mt-9">
                <Link href="/product" className="flex items-center justify-center w-full md:w-view-all h-view-all border border border-black/[0.10] rounded-3xl hover:bg-black hover:text-white">{VIEW_ALL}</Link>
            </div>
        </>
    )
}

export default FeautredProducts;