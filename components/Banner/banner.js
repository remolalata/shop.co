import Link from "next/link";

import ShopMetric from "../ShopMetric/shopMetric";

import { HEADING_LABEL, SUBHEADING_LABEL, SHOP_NOW } from "@/constants/labelsConfig";
import { HERO_MOBILE_URL, HERO_DESKTOP_URL } from "@/constants/imagePaths";

const Banner = () => {
    return (
        <div className="bg-f2f0f1">
            <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="hero-content w-full md:max-w-banner-content">
                    <h1 className="text-4xl md:text-banner-heading font-integral-bold mb-5 md:mb-8 mt-10 md:mt-0" dangerouslySetInnerHTML={{ __html: HEADING_LABEL }} />
                    <h2 className="text-sm md:text-base opacity-60 mb-6 md:mb-8">{SUBHEADING_LABEL}</h2>
                    <Link href="#" className="flex items-center justify-center bg-black w-full md:w-cta-w h-cta-h text-white rounded-full font-satoshi-medium">{SHOP_NOW}</Link>
                    <ShopMetric />
                </div>
                <div className="hero-image">
                    <picture>
                        <source
                            media="(max-width: 640px)"
                            srcSet={HERO_MOBILE_URL}
                        />
                        <source
                            media="(min-width: 641px)"
                            srcSet={HERO_DESKTOP_URL}
                        />
                        <img
                            src={HERO_MOBILE_URL}
                            alt="Banner Image"
                            fill="true"
                        />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Banner