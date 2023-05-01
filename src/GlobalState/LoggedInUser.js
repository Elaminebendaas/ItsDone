import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userID: ''
}

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userID = action.payload
        }

    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer;