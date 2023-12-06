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

export const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    if (typeof originalPrice !== 'number' || typeof discountPercentage !== 'number') {
        throw new Error('Both originalPrice and discountPercentage must be numbers.');
    }

    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error('Discount percentage must be in the range [0, 100].');
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return discountedPrice;
}