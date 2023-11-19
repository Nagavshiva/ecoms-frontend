import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userReducer";
import productReducer from "./slices/productReducer";
import adminReducers from "./slices/adminReducers";
const store = configureStore({
    reducer:{
        auth:userReducer,
        product:productReducer,
        admin:adminReducers
    }
})

export default store;