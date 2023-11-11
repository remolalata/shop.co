import Image from "next/image";

import { LOGO_URL, SOCIAL_MEDIAS_ICON_URL } from "@/constants/imagePaths";
import { SHOP_CO, FOOTER_INFORMATION, SOCIAL_MEDIAS_ICON_ALT } from "@/constants/labelsConfig";

const FooterInformation = () => {
    return (
        <div className="w-full md:w-footer-information">
            <Image src={LOGO_URL} width={167} height={23} alt={SHOP_CO} />
            <p className="mt-3.5 md:mt-6 text-sm md:text-base">{FOOTER_INFORMATION}</p>
            <div className="mt-5 md:mt-9">
                <Image src={SOCIAL_MEDIAS_ICON_URL} width={148} height={28} alt={SOCIAL_MEDIAS_ICON_ALT} />
            </div>
        </div>
    )
}

export default FooterInformation;