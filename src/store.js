import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feature/card/cardslice';

export const store = configureStore ({
    reducer: {
        cart: cartReducer,

    },
})