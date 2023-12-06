import { useState } from "react";

import Button from "@/components/Button/button";
import FilterAccordion from "../FilterAccordion/filterAccordion";
import { FILTERS_COLORS } from "@/constants/labelsConfig";
import { FILTER_COLORS } from "@/constants/filtersConfig";

const FilterColors = () => {

    const [colors, setColors] = useState(FILTER_COLORS.map((color, index) => ({
        color: color,
        state: index === 5 ? true : false,
    })));

    const handleClick = (index) => {
        setColors((prevColors) =>
            prevColors.map((color, i) => ({
                ...color,
                state: i === index ? !color.state : color.state,
            }))
        );
    }

    return (
        <FilterAccordion header={FILTERS_COLORS}>
            <div className="grid grid-rows-2 grid-cols-5 gap-y-3">
                {colors.map((color, index) => (
                    <div key={index} className="">
                        <Button onClick={() => handleClick(index)} customClasses="relative">
                            <div
                                className="w-filter-color h-filter-color border border-black/[0.20] rounded-full"
                                style={{ backgroundColor: color.color }}
                            />
                            {color.state && <div className="bg-color-selected bg-no-repeat bg-center absolute inset-x-0 inset-y-0 z-10"/>}
                        </Button>
                    </div>
                ))}
            </div>
        </FilterAccordion>
    );
};

export default FilterColors;
