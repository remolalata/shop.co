import Image from "next/image";
import ReactStars from "react-rating-stars-component";

import { HALF_STAR_ICON_URL, FULL_STAR_ICON_URL, EMPTY_STAR_ICON_URL } from "@/constants/imagePaths";

const Rating = props => {
    return (
        <ReactStars
            classNames="rating-stars"
            count={5}
            value={props.rate}
            isHalf={true}
            size={18}
            emptyIcon={<Image src={EMPTY_STAR_ICON_URL} height={18} width={18} className="w-[18px] h-[18px]" alt="" />}
            halfIcon={<Image src={HALF_STAR_ICON_URL} height={18} width={18} className="w-[18px] h-[18px]" alt="" />}
            filledIcon={<Image src={FULL_STAR_ICON_URL} height={18} width={18} className="w-[18px] h-[18px]" alt="" />}
        />
    )
}

export default Rating;