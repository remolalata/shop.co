import Rating from "@/components/Rating/rating";
import Image from "next/image";

import { GREEN_CHECK_ICON } from "@/constants/imagePaths";

const ReviewItem = (props) => {
    return (
        <div className="p-8 border border-black/[0.10] rounded-2xl mr-5 md:min-h-review-item">
            <Rating rate={props.rate} />
            <div className="flex items-center my-3">
                <h3 className="text-base md:text-xl font-satoshi-bold mr-1.5">{props.user}</h3>
                <Image src={GREEN_CHECK_ICON} width={24} height={24} alt="" />
            </div>
            <p className="text-sm md:text-base mt-3 text-black/[0.60]">{props.review}</p>
        </div>
    )
}

export default ReviewItem