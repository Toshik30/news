import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getNews } from "../../components/selectors/dataNews";
// import { db } from "../../components/selectors/db";


export const addNewReviews = createAsyncThunk(
    'Reviews/addNewReviews',
    async ({start, end}) => getNews(start, end)
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
        arrReviews: [],
    },
    reducers: {
        handleAddNewReview(state, action) {
            state.isLoading = true
            state.arrReviews = [...state.arrReviews, action.payload]
            console.log(state.arrReviews)
            state.arrReviews = [axios.get(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`).then(res => res.data),axios.post(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`,{
                name : action.payload.name,
                review: action.payload.review,
                rating: action.payload.rating,
                pathLocation: action.payload.pathLocation,
                date: action.payload.date
            })]
        },
        handleDeleteReview(state, action) {
            // db.reviews.delete(state.id = action.payload.id)
            console.log(state.arrReviews)
            if(state.id = action.payload.id) {
                axios.delete(`https://sheet.best/api/sheets/b3a38273-5d35-499b-bfca-a5d93b6ad2e1`)
            }
        },
        handleFilterReviews(state, action) {
            console.log(action);
            state.search = action.payload
        },
    },
    extraReducers:{
        [addNewReviews.pending]: (state) => {
            state.isLoading = true
        },
        [addNewReviews.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            console.log(payload);
            state.companys.entities.push(...payload.data)
            state.companys.count = payload.count
        }
    }
})


export const { handleDeleteReview, handleAddNewReview,handleFilterReviews } = reviewsSlice.actions
export default reviewsSlice.reducer