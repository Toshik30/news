import { configureStore } from "@reduxjs/toolkit"
import authReducer from './auth/authSlice'
import reviewReducer from "./reviews/reviewSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        reviews: reviewReducer,
    }
})