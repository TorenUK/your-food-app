import { createSlice } from "@reduxjs/toolkit";

// state

export const orderSlice = createSlice({
  name: "order",
  initialState: [],

  reducers: {
    addToOrder: (state, action) => {
      return [...state, action.payload];
    },
    removeFromOrder: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    emptyOrder: (state) => {
      return (state = []);
    },
  },
});

// actions
export const { addToOrder, removeFromOrder, emptyOrder } = orderSlice.actions;

// selector
export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
