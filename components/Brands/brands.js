import { useMainContext } from "@/context/MainContext";
import Image from "next/image";

const Brands = () => {
    const { state } = useMainContext();
    const brands = state.brands;

    return (
        <div className="bg-black">
            <div className="container px-4">
                <ul className="flex items-center flex-wrap py-10 md: py-11">
                    {brands.map((brand, index) => (
                        <li 
                        key={brand.id}
                        className={`flex justify-center ${index >= brands.length - 2 ? 'w-1/2 mt-5 md:mt-0' : 'w-1/3'
                    }  md:w-1/5`}
                                >
                            <img src={brand.imagePath} alt={brand.label} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Brands;