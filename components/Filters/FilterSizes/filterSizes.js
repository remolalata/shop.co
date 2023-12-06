import { useState } from "react";

import Pill from "@/components/Pill/pill";
import FilterAccordion from "../FilterAccordion/filterAccordion";

import { FILTERS_SIZES } from "@/constants/labelsConfig";
import { FILTER_SIZES } from "@/constants/filtersConfig";

const FilterSizes = () => {

    const [sizes, setSizes] = useState(FILTER_SIZES.map((size, index) => ({
        label: size,
        state: index === 4 ? true : false,
    })));

    const handleClick = (index) => {
        setSizes((prevSizes) =>
            prevSizes.map((size, i) => ({
                ...size,
                state: i === index ? !size.state : size.state,
            }))
        );
    }

    return (
        <FilterAccordion header={FILTERS_SIZES}>
            {sizes.map((size, index) => (
                <Pill
                    key={index}
                    index={index}
                    label={size.label}
                    customClasses="mr-2 mb-2"
                    active={size.state}
                    onClick={handleClick}
                />
            ))}
        </FilterAccordion>
    )
}

export default FilterSizes;