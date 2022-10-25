import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../components/selectors/dataNews";
import { db } from "../../components/selectors/db";
import { getComments } from "../../components/Main/Reviews/Reviews";
import axios from "axios";
export const addNewReviews = createAsyncThunk(
    'Reviews/addNewReviews',
    async ({start, end}) => getNews(start, end)
)
export const addNewComment = createAsyncThunk(
    'Comments/addNewComment',
    async ({name,review,rating,pathLocation, date, id}) => getComments(name,review,rating,pathLocation, date, id),
)

const reviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        isLoading: false,
        search: '',
        companys: {
            entities: [],
            count: undefined,
        },
        arrReviews: []
    },
    reducers: {
        handleDeleteReview(state, action) {
            db.reviews.delete(state.id = action.payload.id)
            console.log(state.arrReviews)
           
        },
        handleFilterReviews(state, action) {
            state.search = action.payload
        },
    },
    extraReducers:{
        [addNewReviews.pending]: (state) => {
            state.isLoading = true
        },
        [addNewReviews.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false
            state.companys.entities.push(...payload.data)
            state.companys.count = payload.count
        },
        [addNewComment.pending]: (state) => {
            state.isLoading = true
        },
        [addNewComment.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.isLoading = false
            axios.post(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`, payload)
        }
    }
})


export const { handleDeleteReview, handleAddNewReview,handleFilterReviews } = reviewsSlice.actions
export default reviewsSlice.reducer