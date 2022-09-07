import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        arrReviews: [],
    },

    reducers: {
        createReview(state, action) {
            state.arrReviews = action.payload
        }
    }
})
export const { createReview } = reviewsSlice.actions
export default reviewsSlice.reducer