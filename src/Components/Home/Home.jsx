import React, {useEffect} from 'react';
import st from './Home.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {email, minLengthCreator, required} from "../../Helper/fieldValidator";
import {Field} from "redux-form";
import {inputArea} from "../../Helper/InputArea";

const minLength = minLengthCreator(3)

const Home = ({name, isAuth, edited, ...props}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.isStarted) {
            navigate("/test")
        }
    }, [props.isStarted, navigate])

    useEffect(()=>{
        if (props.isInitialized == ""){
            navigate("/start");
        }
    }, [])

    return (
        <div className={"centralPanel"}>
            <h2>ИНСТРУКЦИЯ:</h2>
            <p className={st.textArea}>{props.instruction}
            </p>
            <div className={st.loginForm}>
                <form className={st.formArea} onSubmit={props.handleSubmit}>
                    <div className={st.inputArea}>
                        <Field className={st.nameField} validate={[required, minLength]} name={"name"}
                               component={inputArea} placeholder="Имя"/>
                        <Field className={st.nameField} validate={[required, email]} name={"email"}
                               component={inputArea} placeholder="Почта"/>
                    </div>
                    <div className={st.buttonContainer}>
                        <button className={st.startButton}>Начать</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Home;