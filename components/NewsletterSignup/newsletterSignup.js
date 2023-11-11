import InputGroup from "../InputGroup/inputGroup";
import Button from "../Button/button";

import { NEWSLETTER_HEADING, NEWSLETTER_BUTTON, NEWSLETTER_INPUT_PLACEHOLDER } from "@/constants/labelsConfig";
import { ENVELOPE_ICON_URL } from "@/constants/imagePaths";

const NewsletterSignup = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-black py-8 px-6 md:py-9 md:px-16 rounded-3xl">
            <h2 className="font-integral-bold text-white text-2xl md:text-4xl md:w-newsletter-headline">{NEWSLETTER_HEADING}</h2>
            <div className="w-full md:w-newsletter-form-d mt-8 md:mt-0 text-sm md:text-base">
                <InputGroup icon={ENVELOPE_ICON_URL} placeholder={NEWSLETTER_INPUT_PLACEHOLDER} />
                <Button customClasses="w-full mt-3.5 bg-white rounded-full font-satoshi-medium text-black px-4 py-3">{NEWSLETTER_BUTTON}</Button>
            </div>
        </div>
    )
}

export default NewsletterSignup;