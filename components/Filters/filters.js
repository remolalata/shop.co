import Image from "next/image";

import Button from "../Button/button";
import FilterType from "./FilterType/FilterType";
import FilterPrice from "./FilterPrice/filterPrice";
import FilterColors from "./FilterColors/filterColors";
import FilterSizes from "./FilterSizes/filterSizes";
import FilterStyles from "./FilterStyles/filterStyles";
import Separator from "../Separator/separator";

import { FILTERS_LABEL, APPLY_FILTER_LABEL } from "@/constants/labelsConfig";
import { FILTER_ICON } from "@/constants/imagePaths";

const Filters = () => {
    return (
        <div className="border border-black/[0.10] p-5 rounded-3xl">
            <div className="flex items-center justify-between">
                <h3 className="font-satoshi-bold text-xl">{FILTERS_LABEL}</h3>
                <Image src={FILTER_ICON} width={24} height={24} alt="" />
            </div>
            <div className="mt-6 mb-4">
                <Separator />
            </div>
            <div>
                <FilterType />
            </div>
            <div className="my-6">
                <Separator />
            </div>
            <div>
                <FilterPrice />
            </div>
            <div className="my-6">
                <Separator />
            </div>
            <div>
                <FilterColors />
            </div>
            <div className="my-6">
                <Separator />
            </div>
            <div>
                <FilterSizes />
            </div>
            <div className="my-6">
                <Separator />
            </div>
            <div>
                <FilterStyles />
            </div>
            <div className="mt-6">
                <Button customClasses="w-full text-center py-4 bg-black text-white rounded-full text-sm">
                    {APPLY_FILTER_LABEL}
                </Button>
            </div>
        </div>
    )
}

export default Filters;