import React from 'react'
import { Link } from 'react-router-dom';
import style from '../style/explore.module.css';

const SubHeader = (props) => {
    return (
        <div className={style.head}>
            <Link to="/home">
                <img src="/images/arrow.png" alt=""/>
            </Link>
            <h3>{props.pageTitle}</h3>
        </div>
   
    )
}

export default SubHeader
