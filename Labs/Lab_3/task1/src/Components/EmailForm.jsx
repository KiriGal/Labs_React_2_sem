import React, {useEffect, useState} from 'react';
import './EmailFormStyle.css';

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email can't be blank");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(emailError){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    }, [emailError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const validate = String(e.target.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        if(!validate){
            setEmailError("Incorrectly email");
        }else {
            setEmailError("");
        }
    }

    const blurHandler = (e) => {
        setEmailDirty(true);
    }

    return (
        <div>
            <form>
                {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                <h1>Send your Email</h1>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email"/><br/>
                <button disabled={!formValid} type="submit">Submit</button><br/>
            </form>
        </div>
    );
};

export default EmailForm;