import React, {useEffect, useState} from 'react';
import './CommentsStyle.css';

function generateSecretWord(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let secretWord = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        secretWord += characters[randomIndex];
    }

    return secretWord;
}

const Comments = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [avatar, setAvatar] = useState("");
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState("Name can't be blank");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email can't be blank");
    const [messageDirty, setMessageDirty] = useState(false);
    const [messageError, setMessageError] = useState("Message can't be blank");
    const [avatarDirty, setAvatarDirty] = useState(false);
    const [avatarError, setAvatarError] = useState("Avatar can't be blank");
    const [formValid, setFormValid] = useState(false);
    const [comments, setComments] = useState([]);
    const [config, setConfig] = useState("Submit");

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

    const avatarHandler = (e) => {
        setAvatar(e.target.value);
        const validate = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi.test(e.target.value);

        if(!validate){
            setAvatarError("Incorrectly avatar (url)");
        }else {
            setAvatarError("");
        }
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        setComments([...comments, {name: name, email: email, avatar: avatar, message: message, secretKey: generateSecretWord(4)}]);
        setMessage("");
        setEmail("");
        setName("");
        setEmailDirty(false);
        setNameDirty(false);
        setMessageDirty(false);
        setAvatarDirty(false);
        setFormValid(false);
        setEmailError("Email can't be blank");
        setNameError("Name can't be blank");
        setMessageError("Message can't be blank");
        setAvatarError("Avatar can't be blank");
        setConfig("Submit");
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
    const blurAvatarHandler = (e) => {
        setAvatarDirty(true);
    }


    const editComment = (comment) => {
        setComments(comments.filter((commit) => {
            if(commit.secretKey === comment.secretKey)return 0;
            return comment;
        }));
        setConfig("Update");
        setName(comment.name);
        setEmail(comment.email);
        setMessage(comment.message);
        setAvatar(comment.avatar);

        setAvatarError("");
        setEmailError("");
        setMessageError("");
        setNameError("");
    }
    const viewComment = (comment) => {
        alert("Name: " + comment.name + "\n" +
            "Email: " + comment.email + "\n" +
            "Avatar: " + comment.avatar + "\n" +
            "Message: " + comment.message + "\n" +
            "Secret Key: " + comment.secretKey);
    }
    const deleteComment = (secretKey) => {
        if(window.confirm("Вы точно хотите удалить комментарий?")){
            if(prompt("Введите секретное слово: ") === secretKey){
                setComments(comments.filter((comment) => {
                    if(comment.secretKey === secretKey)return 0;
                    return comment;
                }));
            }else {
                alert("Ошибка не правильно введенное secret Key");
            }
        }
    }

    return (
        <div>
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
                    {(avatarDirty && avatarError) && <div style={{color: "red"}}>{avatarError}</div>}
                    <label htmlFor="avatar">Avatar (url):</label>
                    <input
                        id="avatar"
                        type="text"
                        value={avatar}
                        onBlur={e => blurAvatarHandler(e)}
                        onChange={e => avatarHandler(e)}
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
                {config === "Submit" ? (
                    <button disabled={!formValid} onClick={(e) => buttonHandler(e)}>Submit</button>
                ) : (
                    <button disabled={!formValid} onClick={(e) => buttonHandler(e)}>Update</button>
                )}

            </form>
            <div className="list-comments">
                <h1>Список комментариев: </h1>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div className="comment">
                            <div className="comment-details">
                                <img src={comment.avatar} className="avatar" alt="noimg.jpg"/>
                                <h4 className="name">{comment.name}</h4>
                                <p className="message">Комментарий: {comment.message}</p>
                            </div>
                            <div className="comment-actions">
                                <button onClick={() => editComment(comment)}>Edit</button>
                                <button onClick={() => deleteComment(comment.secretKey)}>Delete</button>
                                <button onClick={() => viewComment(comment)}>View Info</button>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    );
};

export default Comments;