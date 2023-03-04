import {connect} from "react-redux";
import {isAuthReducer} from "../../Redux/loginReducer";
import Test from "./Test";
import {
    addAnswerReducer,
    checkAnswersReducer,
    getQuestionAPI, sendResultAPI,
} from "../../Redux/testReducer";

function mapStateToProps(state){
    return{
        isAuth: state.login.isAuth,
        isStarted: state.login.isStarted,
        question: state.test.testType.question,
        curPos: state.test.curQuest,
        amount: state.test.amount,
        buttons: state.test.testType.buttons
    }
}

function mapDispatchToProps(dispatch){
    return{
        addAnswer(id){
            dispatch(addAnswerReducer(id))
        },
        analyzeResult(){
            dispatch(sendResultAPI())
        },
        getQuestion(cur){
            dispatch(getQuestionAPI(cur))
        }
    }
}

export const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test)