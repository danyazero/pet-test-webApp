import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import {configureStore} from "@reduxjs/toolkit";
import {reducer as reduxForm} from "redux-form";
import testReducer from "./testReducer";


const reducers = combineReducers({
    login: loginReducer,
    test: testReducer,
    form: reduxForm,
})

let store = configureStore({
    reducer: reducers
})

export default store