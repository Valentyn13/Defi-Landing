import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./reduxSlices/navbarSlice/navbarSlice";
import useDefiSlice from "./reduxSlices/useDefiSlice/useDefiSlice";
export const store = configureStore({
    reducer: {
        navbar:navbarSlice,
        defi:useDefiSlice,
    }
})