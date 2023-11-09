import { ALL_PRODUCTS, NEW_ARRIVALS, TOP_SELLING } from "@/constants/labelsConfig";

export const fetchJSONfromApi = async (endpoint) => {
    const response  = await fetch(endpoint);
    const json = await response.json();

    const data = [];

    for (const key in json) {
        data.push({
            id: key,
            ...json[key]
        })
    }

    return data
}

export const getProductListingHeading = (id = "") => {
    const headingMapping = {
        "new-arrival": NEW_ARRIVALS,
        "top-selling": TOP_SELLING,
        "": ALL_PRODUCTS
    };

    return headingMapping[id] || headingMapping[""];
};