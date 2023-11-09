import { useMainContext } from "@/context/MainContext";

const ShopMetric = () => {

    const { state } = useMainContext();

    return (
        <>
            {state.shopMetric && state.shopMetric.length && (
                <ul className="flex flex-wrap items-center justify-between mt-5 md:mt-12">
                    {state.shopMetric.map((metric, index) => (
                        <li
                            key={index}
                            className={`${index < state.shopMetric.length - 1 ? 'w-1/2' : 'w-full mt-3.5 md:mt-0'} md:w-1/3 flex flex-col items-center`}
                        >
                            <div>
                                <h3 className="font-satoshi-bold text-40px">{metric.count.toLocaleString()}+</h3>
                                <div className="text-black/[.6]">{metric.label}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default ShopMetric;