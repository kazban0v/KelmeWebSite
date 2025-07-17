import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import LikeSlice from "./LikeSlice.js";
import SearchSlice from "./SearchSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    like: LikeSlice,
    search: SearchSlice,
  },
});

export default Store;
