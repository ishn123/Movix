import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "../store/homeSlice";


export default configureStore({
    reducer:{
        home:homeReducer
    }
});