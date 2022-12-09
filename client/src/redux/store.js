import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./reduxSlices/navbarSlice/navbarSlice";
import swapDefiSlice from "./reduxSlices/swapDefiSlice/swapDefiSlice";
import useDefiSlice from "./reduxSlices/useDefiSlice/useDefiSlice";
export const store = configureStore({
    reducer: {
        navbar:navbarSlice,
        defi:useDefiSlice,
        swap:swapDefiSlice,
    }
})