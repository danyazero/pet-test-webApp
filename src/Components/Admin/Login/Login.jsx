import React from 'react';
import {Field} from "redux-form";
import st from "./Login.module.css"
import {required} from "../../../Helper/fieldValidator";
import {inputArea} from "../../../Helper/InputArea";

const Login = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field className={st.input} validate={[required]} name={"email"} component={inputArea} placeholder="Enter Login"/>
                <Field className={st.input} validate={[required]} name={"password"} component={inputArea} type="password" placeholder="Enter Password"/>
                <div className={st.checkbox}><label className={st.label}><Field name={"remember"} component={"input"} type="checkbox" /> remember me</label></div>
                <button className={st.loginBtn}>Login</button>
            </form>
        </div>
    )
};

export default Login;