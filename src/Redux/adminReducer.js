import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const adminReducer = createSlice({
    name : "adminReducer",
    initialState: {
        isAuth: false,
        answers: [],
    },
    reducers: {
        adminAuthorizeStatus(state, action){
            state.isAuth = action.payload;

            return state;
        }
    }
})

export const adminAuth = createAsyncThunk(
    'admin/adminAuth',
    async (arg, thunkAPI)=>{

    }
)

export default adminReducer.reducer;
export const {adminAuthorizeStatus} = adminReducer.actions