import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../components/selectors/db";

const reviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        arrReviews: [],
    },

    reducers: {
        createReview(state, action) {
            state.arrReviews = action.payload
        },
        handleAddNewReview(state, action) {
            
            db.reviews.add({ 
                name : action.payload.name,
                review: action.payload.review,
                rating: action.payload.rating,
                pathLocation: action.payload.pathLocation,
                date: action.payload.date
            })
        },
        handleDeleteReview(state, action) {
            db.reviews.delete(state.id = action.payload.id)
            db.reviews.toArray();  
        }
    }
})
export const { createReview,handleDeleteReview, handleAddNewReview } = reviewsSlice.actions
export default reviewsSlice.reducer