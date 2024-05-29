import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers";

export const store=configureStore({
    reducer:{cartReducer:cartSlice.reducer},
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(productsApi.middleware),
})