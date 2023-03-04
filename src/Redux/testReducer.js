import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getDataAboutTestReq, getQuestionReq, getTestsListReq, sendResultReq} from "./api";

const testReducer = createSlice({
    name: "testReducer",
    initialState: {
        testType: {
            type: 1,
            question: "",
            instruction: "",
            buttons: []
        },
        amount: 88,
        curQuest: 0,
        answers: [],
        res: [],
        testsList: [
            // {name: "опросник Г. Шмишека", id: 1},
            // {name: "Методика диагностики личности на мотивацию к избеганию неудач Т. Элерса", id: 2}
        ]
    },
    reducers: {
        addAnswerReducer(state, action){
            state.answers.push(action.payload);
            state.curQuest += 1;

            return state;
        },
        testSettingsSetter(state, action){
            state.testType.type = action.payload.type;
            state.testType.buttons = action.payload.buttons;

            return state;
        },
        setCurQuestionReducer(state, action){
            state.testType.question = action.payload;

            return state;
        },
        setResultsReducer(state, action){
            state.res = action.payload;

            return state;
        },
        setTestsListReducer(state, action){
            state.testsList = action.payload;

            return state;
        },
        setTestsSettingsReducer(state, action){
            state.testType.type = action.payload.id;
            state.testType.buttons = action.payload.buttons;
            state.amount = action.payload.amount;
            state.testType.instruction = action.payload.instruction;

            return state;
        }
    }
})

export const getQuestionAPI = createAsyncThunk(
    'testReducer/getQuestion',
    async (data, thunkAPI) => {
        let res = await getQuestionReq(thunkAPI.getState().test.testType.type, data)
        thunkAPI.dispatch(setCurQuestionReducer(res.data.quest))
    }
)

export const sendResultAPI = createAsyncThunk(
    'testReducer/sendResult',
    async (data, thunkAPI) => {
        let res = await sendResultReq(thunkAPI.getState().test.answers, thunkAPI.getState().test.testType.type, thunkAPI.getState().login.name, thunkAPI.getState().login.email)
        let result = res.data.result
        thunkAPI.dispatch(setResultsReducer(result))
    }
)

export const getTestsList = createAsyncThunk(
    'testReducer/getTestsList',
    async (data, thunkAPI) => {
        let res = await getTestsListReq()
        thunkAPI.dispatch(setTestsListReducer(res.data))
    }
)

export const initTestAPI = createAsyncThunk(
    'testReducer/initTest',
    async(data, thunkAPI) => {
        let res = await getDataAboutTestReq(data)
        thunkAPI.dispatch(setTestsSettingsReducer(res.data))
    }
)
export default testReducer.reducer
export const {setTestsListReducer, addAnswerReducer, setResultsReducer, setCurQuestionReducer, setTestsSettingsReducer} = testReducer.actions


/*
* {
* id: 1,        номер вопроса
* lang: ua,     язык вопроса (ua, rus)
* }
*
*
*
*
* {
* id: 1
* question: ...,
* amount: 100       Количество вопросов в тесте
* }
*
* */