import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../components/selectors/db";

export const addNewReviews = createAsyncThunk(
    'Reviews/addNewReviews',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        const data = await response.json()
        return data
    }
    
)
const reviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        isLoading: false,
        arrReviews: [],
        users: []
    },
    reducers: {
        createReview(state, action) {
            state.arrReviews = action.payload
        },
        handleAddNewReview(state, action) {
            state.isLoading = true
            state.arrReviews = action.payload
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
    },
    extraReducers:{
        [addNewReviews.pending]: (state) => {
            state.isLoading = true
        },
        [addNewReviews.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
        },
        [addNewReviews.rejected]: (state, action) => {

        }
    }
})


export const { createReview,handleDeleteReview, handleAddNewReview } = reviewsSlice.actions
export default reviewsSlice.reducer