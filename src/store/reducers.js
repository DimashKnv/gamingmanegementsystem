import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cart: [] },
  reducers: {
    addCart: (state, action) => {
      let isInCart = state.cart.some((e) => {
        return e.id == action.payload.id;
      });
      console.log(isInCart)
      if (!isInCart) {
        state.cart.push(action.payload);
      } else {
        state.cart.map((e) => {
          if (action.payload.id == e.id) {
            e.count++;
          }
        });
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((e) => {
        return e.id != action.payload.id;
      });
    },
  },
});
export const { addCart, removeCart } = cartSlice.actions;
//   const arr = [0, 1, 2, 3];
//   let res = arr.find((e) => {
//     return e == 3;
//   });

//   console.log(res);
