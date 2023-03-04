import {connect} from "react-redux";
import Home from "./Home";
import { startTestReducer, wantToEditName} from "../../Redux/loginReducer";
import {reduxForm} from "redux-form";

function mapStateToProps(state){
    return{
        name : state.login.name,
        instruction: state.test.testType.instruction,
        isAuth: state.login.isAuth,
        edited: state.login.edited,
        isStarted: state.login.isStarted,
        isInitialized: state.test.testsList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        onSubmit(value){
            debugger
            dispatch(startTestReducer({name: value.name, email: value.email}))
        },
        wantToEdit(){
            dispatch(wantToEditName());
        },
    }
}
const HomeForm = reduxForm({form: "loginForm"})(Home)
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeForm)