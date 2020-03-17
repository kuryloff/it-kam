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

    let dialogElement = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messageElement = props.data.messages.map(m => <Message message={m.message}/>);

    let messageText = React.createRef();
    let sendMessage = () => {
       props.dispatch(sendMessageCreator( ));
    };
    let onMessageChange = () =>{
        let text = messageText.current.value;

        let action = updateNewMessageTextCreator(text);
        props.dispatch(action);
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
                <textarea onChange={onMessageChange} ref={messageText} placeholder={'Enter your message'} value={props.data.newMessageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>


        </div>
    );
};

export default Dialogs