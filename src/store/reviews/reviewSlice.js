import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../components/selectors/dataNews";
import { getComments } from "../../components/Main/Reviews/Reviews";
import { getDeleteComment } from "../../components/Main/Reviews/ReviewsList";
import axios from "axios";

export const addNewReviews = createAsyncThunk(
    'Reviews/addNewReviews',
    async ({start, end}) => getNews(start, end)
)
export const addNewComment = createAsyncThunk(
    'Comments/addNewComment',
    async ({name,review,rating,pathLocation, date, idUser}) => getComments(name,review,rating,pathLocation, date, idUser),
)
export const deleteComment = createAsyncThunk(
    'Comments/deleteComment',
    async (idUser) => getDeleteComment({idUser})
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
        
        handleFilterReviews(state, action) {
            state.search = action.payload
        },
        getCommentsArray( state, {payload}) {
            state.arrReviews = payload
            // console.log(payload);
        }
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
        [deleteComment.fulfilled]: (state,{payload}) => {
            console.log(payload);
            axios.delete(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`).then( res => {
                console.log(res)
                return res
            })
        },
        [addNewComment.pending]: (state) => {
            state.isLoading = true
        },
        [addNewComment.fulfilled]: (state, {payload}) => {
            // console.log(payload)
            state.isLoading = false
            axios.post(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`, payload)
        }
    }
})


export const { handleAddNewReview,handleFilterReviews,getCommentsArray } = reviewsSlice.actions
export default reviewsSlice.reducer