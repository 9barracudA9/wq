import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";


 const rootReducer=combineReducers({
    toolkit:commentsSlice,
})

export const store=configureStore({
    reducer:rootReducer,
})
