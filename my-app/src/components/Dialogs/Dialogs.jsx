import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialog = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let message = props.data.messages.map(m => <Message message={m.message}/>);

    let messageText = React.createRef();
    let addMessage = () => {
       props.addMessage();
    };
    let onMessageChange = () =>{
        let text = messageText.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialog}
            </div>
            <div className={classes.messages}>
                {message}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={messageText} cols="50" rows="5" value={props.data.newMessageText}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>


        </div>
    );
};

export default Dialogs