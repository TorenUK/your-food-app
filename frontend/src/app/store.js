import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
    user: userReducer,
  },
});
