import NewsletterSignup from "@/components/NewsletterSignup/newsletterSignup";
import FooterInformation from "./FooterInformation/footerInformation";
import PaymentMethods from "@/components/PaymentMethods/paymentMethods";
import SiteMap from "./SiteMap/siteMap";
import Separator from "@/components/Separator/separator";

import { FOOTER_COPYRIGHT } from "@/constants/labelsConfig";

const Footer = () => {
    return (
        <footer className="bg-footer text-black/[0.6]">
            <div className="bg-gradient-to-b from-white from-50% to-footer to-50%">
                <div className="container px-4 mb-8 md:mb-12">
                    <NewsletterSignup />
                </div>
            </div>
            <div className="container pb-20 px-4">
                <div className="flex flex-col md:flex-row justify-between md:gap-20">
                    <FooterInformation />
                    <div className="grow">
                        <SiteMap />
                    </div>
                </div>

                <div className="my-5">
                    <Separator />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-black/[0.6]">{FOOTER_COPYRIGHT}</p>
                    <div className="mt-4 md:mt-0">
                        <PaymentMethods />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;