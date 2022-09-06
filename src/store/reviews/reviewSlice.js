import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        
    },
    reducers: {
        createReview(state, action) {
            
        }
    }
})
export const { createReview } = reviewsSlice.actions
export default reviewsSlice.reducer