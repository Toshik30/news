import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        auth: [{name: '', email: ''}]
    },
    reducers: {
        authefication(state, action) {
            state.auth.push({
                name: action.payload})
        },
        
        autheficationEmail(state, action) {
            state.auth.push({
                email: action.payload,
            })
        }
    }

})
export const { authefication, autheficationEmail } = authSlice.actions
export default authSlice.reducer