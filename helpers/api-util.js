import { SHOP_METRIC_ENDPOINT, BRANDS_ENDPOINT, PRODUCTS_ENDPOINT, PRODUCT_STYLES_ENDPOINT, REVIEWS_ENDPOINT } from "@/constants/apiEndpoints";
import { fetchJSONfromApi } from "@/utils/utils";

export const getAllShopMetric = async () => {
    return await fetchJSONfromApi(SHOP_METRIC_ENDPOINT);
}

export const getAllBrands = async () => {
    return await fetchJSONfromApi(BRANDS_ENDPOINT);
}

export const getAllProducts = async () => {
    return await fetchJSONfromApi(PRODUCTS_ENDPOINT)
}

export const getAllReviews = async () => {
    return await fetchJSONfromApi(REVIEWS_ENDPOINT)
}