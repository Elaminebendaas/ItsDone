import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        userID: '',
    },
    reducers: {
        addUser: (state, action) => {
            state.userID = action.payload
            console.log(action.payload)
        }

    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer;