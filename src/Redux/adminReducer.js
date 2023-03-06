import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginWithCredsReq, loginWithoutCredsReq} from "./api";
import Cookies from "universal-cookie/es6";

const adminReducer = createSlice({
    name : "adminReducer",
    initialState: {
        adminName: "",
        isAuth: false,
        answers: [],
    },
    reducers: {
        adminAuthorizeStatus(state, action){
            debugger
            state.isAuth = true;
            state.adminName = action.payload.name;
            if (action.payload.token){
                const cookies = new Cookies();
                cookies.set('token', action.payload.token, { path: '/' , maxAge: 99999999});
            }

            return state;
        }
    }
})

export const adminAuth = createAsyncThunk(
    'admin/adminAuth',
    async (arg, thunkAPI)=>{
        let data = await loginWithoutCredsReq(arg.username, arg.password, arg.remember)
        thunkAPI.dispatch(adminAuthorizeStatus(data.data))
    }
)

export const loginWithCreds = createAsyncThunk(
    'admin/loginWithCreds',
    async(arg, thunkAPI) => {
        let data = await loginWithCredsReq()
        thunkAPI.dispatch(adminAuthorizeStatus(data.data))
    }
)

export default adminReducer.reducer;
export const {adminAuthorizeStatus} = adminReducer.actions