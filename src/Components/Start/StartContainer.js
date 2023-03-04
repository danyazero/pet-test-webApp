import {connect} from "react-redux";
import Start from "./Start";
import {getTestsList, initTestAPI, setTestsSettingsReducer} from "../../Redux/testReducer";

function mapStateToProps(state){
    return{
        tests: state.test.testsList
    }
}

function mapDispatchToProps(dispatch){
    return{
        getTestsList(){
            dispatch(getTestsList())
        },
        setTestsSettings(type){
            dispatch(initTestAPI(type))
        }
    }
}

export const StartContainer = connect(mapStateToProps, mapDispatchToProps)(Start)