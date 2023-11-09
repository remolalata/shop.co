import ReactStars from "react-rating-stars-component";
import Image from "next/image";

const Product = ({ product }) => {
    return (
        <div className="w-product h-product">
            <Image src={product.imagePath} width={295} height={298} className="h-full rounded-2xl mb-4" alt={product.name} />
            <h3 className="font-satoshi-bold text-xl">{product.name}</h3>
            <div className="flex items-center">
                <div>
                    <ReactStars
                        count={5}
                        value={product.rating}
                        isHalf={true}
                        size={18}
                        activeColor="#FFC633"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <span>{product.rating}/<span className="text-black/[0.6]">5</span></span>
                </div>
            </div>

            <h3 className="font-satoshi-bold text-2xl">${product.price}</h3>
        </div>
    )
}

export default Product