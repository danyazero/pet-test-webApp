import React, {useEffect} from 'react';
import Card from "./Card/Card";
import st from "./Start.module.css"
const Start = (props) => {

    useEffect(() => {
        props.getTestsList();
    }, [])

    const cards = props.tests.map((el, id) => <Card key={id} setTest={props.setTestsSettings} id={el.id} author={el.author} name={el.name}/>)
    return(
        <div className={st.centralPanel}>
            {cards}
        </div>
    )
};

export default Start;