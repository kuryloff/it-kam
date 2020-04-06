import React from "react";
import {sendMessageCreator,updateNewMessageTextCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => ({
        dialogsPage: state.dialogsPage,
    });

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

export default compose(
    connect(mapStateToProps, mapDispatchToPros),
    withAuthRedirect
)(Dialogs);
