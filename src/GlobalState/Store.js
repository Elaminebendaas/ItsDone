import { configureStore } from '@reduxjs/toolkit';
import LoggedInUser from './LoggedInUser';

export const store = configureStore({
    reducer: {
        userData: LoggedInUser

    }
});

