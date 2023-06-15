import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems : [],
    amount : 0,
    total: 0,
    isloading: true
}

const cartslice = createSlice({
 name:'cart',
 initialState,
})

console.log(cartslice);

export default cartslice.reducer;