import { createContext, useContext, useReducer } from "react";
import { SET_TOGGLE_MENU, SET_DISPLAY_TOPBAR, SET_DISPLAY_MOBILE_SEARCH_BAR, SET_SHOP_METRIC, SET_BRANDS, SET_PRODUCTS } from "@/actions/mainActions";

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

const initialState = {
    toggleMenu: false,
    displayTopBar: true,
    displayMobileSearchBar: false,
    shopMetric: [],
    brands: [],
    products: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TOGGLE_MENU:
            return { ...state, toggleMenu: action.payload }
        case SET_DISPLAY_TOPBAR:
            return { ...state, displayTopBar: action.payload }
        case SET_DISPLAY_MOBILE_SEARCH_BAR:
            return { ...state, displayMobileSearchBar: action.payload }
        case SET_SHOP_METRIC:
            return { ...state, shopMetric: action.payload }
        case SET_BRANDS:
            return { ...state, brands: action.payload }
        case SET_PRODUCTS:
            return { ...state, products: action.payload }
        default:
            return state;
    }
}

export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MainContext.Provider value={{ state, dispatch }}>
            {children}
        </MainContext.Provider>
    )
}