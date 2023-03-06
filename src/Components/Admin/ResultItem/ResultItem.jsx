import React from 'react';
import st from "./ResultItem.module.css"
const ResultItem = (props) => {
    return(
        <div className={st.grigItem}>
            <p className={st.itemNumber}>#{props.id}</p>
            <p className={st.itemName}>{props.name}</p>
            <p className={st.itemPoints}>{props.points}</p>
        </div>
    )
};

export default ResultItem;