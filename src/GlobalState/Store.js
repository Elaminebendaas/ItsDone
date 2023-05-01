import { configureStore } from '@reduxjs/toolkit';
import LoggedInUser from './LoggedInUser';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'main-root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, LoggedInUser)

export const store = configureStore({
    reducer: {
        userData: persistedReducer,
        middleware: [thunk]

    }
});

export const persistor = persistStore(store)

