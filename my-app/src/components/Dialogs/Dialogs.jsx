import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialog = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let message = props.data.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialog}
            </div>
            <div className={classes.messages}>
                {message}
            </div>
        </div>
    );
};

export default Dialogs