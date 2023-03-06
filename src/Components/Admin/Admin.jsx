import React from 'react';
import {LoginContainer} from "./Login/LoginContainer";

const Admin = (props) => {

    function authChecker() {
        if (props.isAuth) {
            return <div></div>
        } else return <LoginContainer/>
    }

    return (
        <div>
            {authChecker()}
        </div>
    )
};

export default Admin;