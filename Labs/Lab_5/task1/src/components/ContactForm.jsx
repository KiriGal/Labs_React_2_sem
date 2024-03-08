import React, {useEffect, useState} from 'react';
import './ContactFormStyle.css';

const ContactForm = ({addContacts}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("male");
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState("Name can't be blank");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email can't be blank");
    const [messageDirty, setMessageDirty] = useState(false);
    const [messageError, setMessageError] = useState("Message can't be blank");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(nameError && emailError && messageError){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    }, [nameError, emailError, messageError]);

    const nameHandler = (e) => {
        setName(e.target.value);
        const validate = /^[A-Z][a-zA-Z0-9]*$/.test(e.target.value);

        if(!validate){
            setNameError("Incorrectly name");
        }else {
            setNameError("");
        }
    }

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

    const messageHandler = (e) => {
        setMessage(e.target.value);
        const validate = /^[,.?!a-zA-Z0-9\s]+$/.test(e.target.value);

        if(!validate){
            setMessageError("Incorrectly message");
        }else {
            setMessageError("");
        }
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        addContacts({name: name, email: email, message: message, gender: gender});
        setGender("male");
        setMessage("");
        setEmail("");
        setName("");
        setEmailDirty(false);
        setNameDirty(false);
        setMessageDirty(false);
        setFormValid(false);
        setEmailError("Email can't be blank");
        setNameError("Name can't be blank");
        setMessageError("Message can't be blank")
    }

    const blurNameHandler = (e) => {
        setNameDirty(true);
    }
    const blurEmailHandler = (e) => {
        setEmailDirty(true);
    }
    const blurMessageHandler = (e) => {
        setMessageDirty(true);
    }


    return (
        <form>
            <div>
                {(nameDirty && nameError) && <div style={{color: "red"}}>{nameError}</div>}
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onBlur={e => blurNameHandler(e)}
                    onChange={e => nameHandler(e)}
                    required
                />
            </div>
            <div>
                {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onBlur={e => blurEmailHandler(e)}
                    onChange={e => emailHandler(e)}
                    required
                />
            </div>
            <div>
                {(messageDirty && messageError) && <div style={{color: "red"}}>{messageError}</div>}
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onBlur={e => blurMessageHandler(e)}
                    onChange={e => messageHandler(e)}
                    required
                ></textarea>
            </div>
            <div>
                <label>Gender:</label>
                <div>
                    <label htmlFor="male">
                        <input
                            id="male"
                            name="gender"
                            type="radio"
                            value="male"
                            checked={"male" === gender}
                            onChange={e => setGender(e.target.value)}
                            required
                        />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input
                            id="female"
                            name="gender"
                            type="radio"
                            value="female"
                            checked={"female" === gender}
                            onChange={e => setGender(e.target.value)}
                            required
                        />
                        Female
                    </label>
                </div>
            </div>
            <button disabled={!formValid} onClick={(e) => buttonHandler(e)}>Submit</button>
        </form>
    );
};

export default ContactForm;