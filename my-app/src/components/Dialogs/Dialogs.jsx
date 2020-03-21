import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messageElement = state.messages.map(m => <Message message={m.message}/>);

    let onSendMessage = () => {
        props.sendMesage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text)

    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
            <div>
                <textarea onChange={onMessageChange} placeholder={'Enter your message'}
                          value={props.dialogsPage.newMessageBody}></textarea>
                <button onClick={onSendMessage}>Send</button>
            </div>


        </div>
    );
};

export default Dialogs