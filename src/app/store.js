import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import CartSlice from "./CartSlice";

const store=configureStore({
    reducer:{
        products:ProductsSlice,
        cart:CartSlice,
    },
});
export default store