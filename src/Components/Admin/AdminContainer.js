import {connect} from "react-redux";
import Admin from "./Admin";

function mapStateToProps(state){
    return{
    isAuth: state.admin.isAuth,
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)