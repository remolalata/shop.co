import Link from "next/link";
import Image from "next/image";

import Rating from "../Rating/rating";
import Button from "../Button/button";

import { CURRENCY_CODE } from "@/constants/labelsConfig";
import { calculateDiscountedPrice } from "@/utils/utils";

const Product = ({ product }) => {

    const discountedPrice = product.discountPercentage > 0
        ? calculateDiscountedPrice(product.price, product.discountPercentage)
        : null;

    const priceElement = (
        <div className="flex items-center">
            <h3 className="font-satoshi-bold text-xl md:text-2xl">
                {CURRENCY_CODE}{discountedPrice !== null ? (
                    <span>
                        {discountedPrice} <span className="text-black/[0.4] ml-1 line-through">{CURRENCY_CODE}260</span>
                    </span>
                ) : (
                    product.price
                )}

            </h3>
            {product.discountPercentage > 0 && <span className="text-discount-pill bg-discount-pill/[0.10] text-xs py-1.5 px-3.5 rounded-full ml-2.5">-{product.discountPercentage}%</span>}
        </div>

    );

    return (
        <Button>
            <div className="h-product relative h-product-m md:h-product w-product-m md:w-product">
                <Image src={product.imagePath} fill className="h-full rounded-2xl mb-4" alt={product.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            <h3 className="font-satoshi-bold text-base md:text-xl mt-2.5 md:mt-4 text-left">
                <Link href="#" className="inline-block">{product.name}</Link>
            </h3>
            <div className="flex items-center my-1">
                <div>
                    <Rating rate={product.rating} />
                </div>
                <div className="ml-3 text-sm">
                    <span>{product.rating}/<span className="text-black/[0.6]">5</span></span>
                </div>
            </div>

            {priceElement}
        </Button>
    )
}

export default Product