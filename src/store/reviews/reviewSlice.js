import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../components/selectors/dataNews";
import { db } from "../../components/selectors/db";

export const addNewReviews = createAsyncThunk(
    'Reviews/addNewReviews',
    async (elem) => {
    const tt = 6
    console.log(tt);
    return await getNews(elem, tt)
      
    }
)

const reviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        isLoading: false,
        search: '',
        companys: [],
        arrReviews: [],
    },
    reducers: {
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
        },
        handleFilterReviews(state, action) {
            state.search = action.payload
        }
    },
    extraReducers:{
        [addNewReviews.pending]: (state) => {
            state.isLoading = true
        },
        [addNewReviews.fulfilled]: (state, action) => {
            state.isLoading = false
            state.companys = action.payload.data
        }
    }
})


export const { handleDeleteReview, handleAddNewReview,handleFilterReviews } = reviewsSlice.actions
export default reviewsSlice.reducer