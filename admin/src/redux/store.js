import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { useReducer } from "userRedux";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-perslist/lib;storage";

const persisttConfig = {
    key: "root",
    version: 1,
    storage, 
};

const rootReducer = combineReducers({user:userReducer})

const persistedReducer = persistReducer(persisttConfig, rootReducer) 

export const store = () => configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
})

export let  persistor = persistStore(configureStore)