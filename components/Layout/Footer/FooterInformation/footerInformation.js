import Image from "next/image";

import { LOGO_URL } from "@/constants/imagePaths";
import { FOOTER_INFORMATION, FOOTER_COPYRIGHT } from "@/constants/labelsConfig";
import PaymentMethods from "@/components/PaymentMethods/paymentMethods";

const FooterInformation = () => {
    return (
        <div>
            <div>
                <div>
                    <Image src={LOGO_URL} width={167} height={23} />
                    <p>{FOOTER_INFORMATION}</p>
                </div>
            </div>

            <div className="container relative px-4 my-12 overflow-hidden">
                <hr className="h-px bg-gray-200 border-0 bg-black/[0.1]" />
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm text-black/[0.6]">{FOOTER_COPYRIGHT}</p>
                <div>
                    <PaymentMethods />
                </div>
            </div>
        </div>
    )
}

export default FooterInformation;