import Slider from "react-slick";
import Image from "next/image";
import { useMainContext } from "@/context/MainContext";

import ReviewItem from "./ReviewItem/reviewItem";
import Button from "../Button/button";

import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from "@/constants/imagePaths";

const ReviewList = () => {
    const { state } = useMainContext();

    const CustomPrevArrow = ({ onClick }) => {
        return (
            <Button customClasses="custom-prev-arrow hidden md:block" onClick={onClick}>
                <Image src={ARROW_LEFT_ICON} width={24} height={24} alt="" />
            </Button>
        )
    }

    const CustomNextArrow = ({ onClick }) => {
        return (
            <Button onClick={onClick} customClasses="custom-next-arrow hidden md:block">
                <Image src={ARROW_RIGHT_ICON} width={24} height={24} alt="" />
            </Button>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div>
            <Slider {...settings}>
                {state.reviews.map((review, index) => (
                    <div key={index}>
                        <ReviewItem {...review} />
                    </div>
                ))}
            </Slider>
        </div>

    )
}

export default ReviewList;