import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      let isInCart = state.cart.some((e) => {
        return e.id == action.payload.id;
      });
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
    minusCart: (state, action) => {
      let obj = state.cart.find((e) => {
        return e.id == action.payload.id;
      });

      obj.count -= 1;
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((e) => {
        return e.id != action.payload.id;
      });
    },
  },
});
export const { addCart, minusCart, deleteCart } = cartSlice.actions;
//   const arr = [0, 1, 2, 3];
//   let res = arr.find((e) => {
//     return e == 3;
//   });

//   console.log(res);
