import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import fetchAllPostsReducer from "../reducers/postSlice";

const combinedReducers = combineReducers({
    post : fetchAllPostsReducer,
})

export const store = configureStore({
    reducer:combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch