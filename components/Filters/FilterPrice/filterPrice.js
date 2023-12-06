import { useState } from "react";

import RangeSlider from "react-range-slider-input";
import FilterAccordion from "../FilterAccordion/filterAccordion";
import 'react-range-slider-input/dist/style.css';

import { FILTERS_PRICE } from "@/constants/labelsConfig";

const FilterPrice = () => {

    const [value, setValue] = useState([50, 200]);

    return (
        <FilterAccordion header={FILTERS_PRICE}>
            <RangeSlider className="mb-14" id="range" min={0} max={250} step={1} value={value} onInput={setValue} />
        </FilterAccordion>
    )
}

export default FilterPrice;