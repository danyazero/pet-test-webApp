import {connect} from "react-redux";
import Result from "./Result";
import {checkAnswersReducer} from "../../Redux/testReducer";

function mapStateToProps(state){
    return{
        result: state.test.res,
        isStarted: state.login.isStarted,
        type: state.test.testType.type,
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

export const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)