import React from "react";
import {sendMessageCreator,updateNewMessageTextCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToPros = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToPros)(Dialogs);


export default DialogsContainer;