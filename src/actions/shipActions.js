import { ADD_TO_CART, LOAD_PRODUCTS } from "./types";
import productData from "../assets/data";

export const loadProducts = () => {
    
    return {
        type: LOAD_PRODUCTS,
        products: productData
    };

};

export const addToCart = () => {
    
    return {
        type: ADD_TO_CART,
        products: productData
    };

};
