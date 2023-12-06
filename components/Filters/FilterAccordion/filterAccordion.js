import { useState } from "react";

import Image from "next/image";

import { CARET_UP_ICON, CARET_DOWN_ICON } from "@/constants/imagePaths";

const FilterAccordion = props => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className="">
            <div
                className="flex items-center justify-between cursor-pointer mb-5"
                onClick={toggleAccordion}
            >
                <h3 className="font-satoshi-bold text-xl">{props.header}</h3>
                {isOpen ?
                    <Image src={CARET_UP_ICON} width={16} height={16} alt="" />
                    : <Image src={CARET_DOWN_ICON} width={16} height={16} alt="" />
                }
                
            </div>
            {isOpen && props.children}
        </div>
    )
}

export default FilterAccordion;