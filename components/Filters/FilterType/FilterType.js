import Image from "next/image";

import Button from "@/components/Button/button";

import { FILTER_TYPES } from "@/constants/filtersConfig";
import { CARET_RIGHT_ICON } from "@/constants/imagePaths";

const FilterType = () => {
    return (
        <>
            {FILTER_TYPES.length &&
                <ul>
                    {FILTER_TYPES.map((type, index) => (
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
            }
        </>
    )
}

export default FilterType;