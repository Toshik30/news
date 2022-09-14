import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        name: '2',
        email: '',
        password: ''
    },
    reducers: {
        authefication(state, action) {
            state[action.payload.name] = action.payload.value
        }   
    }
})
export const { authefication } = authSlice.actions
export default authSlice.reducer