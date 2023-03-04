import React, {useEffect} from 'react';
import st from "./Result.module.css"
import {useNavigate} from "react-router-dom";
import ResultItem from "./ResultItem/ResultItem";

const Result = (props) => {

    const navigate = useNavigate();
    useEffect(()=>{
        if (!props.isStarted){
            navigate("/");
        }
    }, [])

    debugger
    const resultArray = props.result.map((el, id)=> <ResultItem key={id} id={id+1} name={el.name} points={el.count}/>)
    return(
        <div>
            {resultArray}
        </div>
    )
};

export default Result;