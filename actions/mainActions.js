export const SET_TOGGLE_MENU = "SET_TOOGLE_MENU";
export const SET_DISPLAY_TOPBAR = "SET_DISPLAY_TOPBAR";
export const SET_DISPLAY_MOBILE_SEARCH_BAR = "SET_DISPLAY_MOBILE_SEARCH_BAR";
export const SET_SHOP_METRIC = "SET_SHOP_METRIC";
export const SET_BRANDS = "SET_BRANDS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT_STYLES = "SET_PRODUCT_STYLES";

export const setToggleMenu = (data) => {
    return { type: SET_TOGGLE_MENU, payload: data };
}

export const setDisplayTopbar = (data) => {
    return { type: SET_DISPLAY_TOPBAR, payload: data };
}

export const setDisplayMobileSearchBar = (data) => {
    return { type: SET_DISPLAY_MOBILE_SEARCH_BAR, payload: data };
}

export const setShopMetric = (data) => {
    return { type: SET_SHOP_METRIC, payload: data }
}

export const setBrands = (data) => {
    return { type: SET_BRANDS, payload: data }
}

export const setProducts = (data) => {
    return { type: SET_PRODUCTS, payload: data }
}

export const setProductStyle = (data) => {
    return { type: SET_PRODUCT_STYLES, payload: data }
}