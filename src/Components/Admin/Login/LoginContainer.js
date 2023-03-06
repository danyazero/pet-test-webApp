import {connect} from "react-redux";
import {adminAuth} from "../../../Redux/adminReducer";
import {reduxForm} from "redux-form";
import Login from "./Login";

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return{
        onSubmit(values){
            const data={
                username: values.email,
                password : values.password
            }
            dispatch(adminAuth(data))
        }
    }
}

const LoginForm = reduxForm({form : "login"})(Login)
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)