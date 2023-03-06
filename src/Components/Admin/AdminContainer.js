import {connect} from "react-redux";
import Admin from "./Admin";
import {loginWithCreds} from "../../Redux/adminReducer";

function mapStateToProps(state){
    return{
    isAuth: state.admin.isAuth,
    }
}

function mapDispatchToProps(dispatch){
    return{
        loginWithCreds(){
            dispatch(loginWithCreds())
        }
    }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)