import ReactStars from "react-rating-stars-component";
import Image from "next/image";

import { HALF_STAR_ICON_URL, FULL_STAR_ICON_URL, EMPTY_STAR_ICON_URL } from "@/constants/imagePaths";
import { CURRENCY_CODE } from "@/constants/labelsConfig";
import { calculateDiscountedPrice } from "@/utils/utils";
import Link from "next/link";

const Product = ({ product }) => {

    const discountedPrice = product.discountPercentage > 0
        ? calculateDiscountedPrice(product.price, product.discountPercentage)
        : null;

    const priceElement = (
        <div className="flex items-center">
            <h3 className="font-satoshi-bold text-2xl">
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
        <div>
            <div className="w-product h-product">
                <Image src={product.imagePath} width={295} height={298} className="h-full rounded-2xl mb-4" alt={product.name} />
            </div>

            <h3 className="font-satoshi-bold text-xl mt-4">
                <Link href="#">{product.name}</Link>
            </h3>
            <div className="flex items-center my-1">
                <div>
                    <ReactStars
                        classNames="rating-stars"
                        count={5}
                        value={product.rating}
                        isHalf={true}
                        size={18}
                        emptyIcon={<Image src={EMPTY_STAR_ICON_URL} height={18} width={18} className="w-[18px] h-[18px]" />}
                        halfIcon={<Image src={HALF_STAR_ICON_URL} height={18} width={18} className="w-[18px] h-[18px]" />}
                        filledIcon={<Image src={FULL_STAR_ICON_URL} height={18} width={18} className="w-[18px] h-[18px]" />}
                    />
                </div>
                <div className="ml-3 text-sm">
                    <span>{product.rating}/<span className="text-black/[0.6]">5</span></span>
                </div>
            </div>

            {priceElement}
        </div>
    )
}

export default Product