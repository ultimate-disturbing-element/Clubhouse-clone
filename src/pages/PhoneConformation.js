import React ,{useState} from 'react'
import PhoneInput from 'react-phone-number-input';
import {Link} from 'react-router-dom';
import style from '../style/phoneConfirm.module.css'

const PhoneConformation = () => {
    const [value,setValue]= useState();
    return (
        <div className={style.phoneConfirmContainer}>
            <Link className={style.backBtn} exact to='/'>
                <img src="/images/arrow.png" alt=""/>
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry="IN" value={value} onChange={setValue}/>
            <p>By entering your number, you're aggreeing to our <span>
                Terms of Services and Privacy Policy.
                </span>
                Thanks!
                </p>
                <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
                    Next <img src="/images/nextArrowIcon.svg" alt="" className="ml-1"/>
                </Link>
        </div>
    )
}

export default PhoneConformation
