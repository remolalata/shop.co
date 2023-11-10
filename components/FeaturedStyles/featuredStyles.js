import featuredStyles from "@/constants/featuredStyles";
import { BROWSE_BY_DRESS_STYLE } from "@/constants/labelsConfig";

const FeaturedStyles = () => {

    return (
        <div className="bg-featured-style px-6 py-10 md:px-16 md:py-16 mt-20 rounded-3xl">
            <div className="text-center mb-7 md:mb-16">
                <h2 className="font-integral-bold text-3xl md:text-5xl">{BROWSE_BY_DRESS_STYLE}</h2>
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-5 mb-5">
                {featuredStyles.map((style, index) => {
                    if (index === 0 || index === 1) {
                        return <div key={index} className={`relative rounded-3xl bg-white h-featured-styles-item md:h-featured-styles-item-md bg-no-repeat bg-cover bg-center w-full ${index === 0 ? 'bg-featured-style-casual md:w-1/3' : 'bg-featured-style-formal md:flex-1'}`}>
                            <h3 className="font-satoshi-bold text-2xl md:text-4xl absolute top-3 left-5 md:top-7 md:left-9">{style.label}</h3>
                        </div>;
                    }
                    return null;
                })}
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-5 mb-5">
                {featuredStyles.map((style, index) => {
                    if (index === 2 || index === 3) {
                        return <div key={index} className={`relative rounded-3xl bg-white h-featured-styles-item md:h-featured-styles-item-md bg-no-repeat bg-cover bg-center w-full ${index === 3 ? 'bg-featured-style-gym md:w-1/3' : 'bg-featured-style-party md:flex-1'}`}>
                            <h3 className="font-satoshi-bold text-2xl md:text-4xl absolute top-3 left-5 md:top-7 md:left-9">{style.label}</h3>
                        </div>;
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default FeaturedStyles;