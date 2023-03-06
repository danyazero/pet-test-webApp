import {createSlice} from "@reduxjs/toolkit";

const loginReducer = createSlice({
    name: "loginReducer",
    initialState: {
        name: "",
        email: "",
        edited: false,
        isAuth: false,
        isStarted: false,
    },
    reducers: {
        startTestReducer(state, action){
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isStarted = true;
            state.isAuth = true;


            return state;
        },
        wantToEditName(state, action){
            state.edited = true;

            return state
        },
    }
})

export default loginReducer.reducer;
export const {startTestReducer, wantToEditName} = loginReducer.actions