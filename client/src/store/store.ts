import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
// import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage";
import fetchAllPostsReducer from "../reducers/postSlice";

const rootConfig = {
    key:'root',
    storage,
}

const combinedReducers = combineReducers({
    post : fetchAllPostsReducer,
});

const persistedReducer = persistReducer(rootConfig,combinedReducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger),
    devTools: true
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch