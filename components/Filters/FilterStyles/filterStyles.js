import Image from "next/image";
import Button from "@/components/Button/button";

import FilterAccordion from "../FilterAccordion/filterAccordion";

import { FILTERS_STYLES } from "@/constants/labelsConfig";
import { FILTER_STYLES } from "@/constants/filtersConfig";
import { CARET_RIGHT_ICON } from "@/constants/imagePaths";

const FilterStyles = () => {
    return (
        <FilterAccordion header={FILTERS_STYLES}>
            <ul>
                {FILTER_STYLES.map((type, index) => (
                    <li key={index} className="py-1.5">
                        <Button customClasses="w-full">
                            <div className="flex items-center justify-between text-black/[0.60]">
                                {type}
                                <Image src={CARET_RIGHT_ICON} width={16} height={16} alt="" />
                            </div>
                        </Button>
                    </li>
                ))}
            </ul>
        </FilterAccordion>
    )
}

export default FilterStyles;