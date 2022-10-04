import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../components/selectors/dataNews";
import { db } from "../../components/selectors/db";

export const addNewReviews = createAsyncThunk(
    'Reviews/addNewReviews',
    async ({start, end}) => {
    return await getNews(start, end)
      
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
        },
        showMore(state, action) {
            state.moreShowed = action.payload
            console.log(state.moreShowed)
        }
    },
    extraReducers:{
        [addNewReviews.pending]: (state) => {
            state.isLoading = true
        },
        [addNewReviews.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.companys = action.payload.data
        }
    }
})


export const { handleDeleteReview, handleAddNewReview,handleFilterReviews, showMore } = reviewsSlice.actions
export default reviewsSlice.reducer