import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 sendMesage={onSendMessage}
                 dialogsPage={state}
        />
    );
};


export default DialogsContainer