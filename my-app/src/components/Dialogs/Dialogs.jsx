import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/` + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.messsage}>{props.message}</div>
    )
};

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Kuryk'},
        {id: 2, name: 'Frostyk'},
        {id: 3, name: 'Dart'},
        {id: 4, name: 'Vaider'},
        {id: 5, name: 'Chubaka'},
        {id: 6, name: 'R2D2'},
    ];
    let messagesData =[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you'},
        {id: 4, message: `What's up?`},
        {id: 5, message: 'where are you?'},
        {id: 6, message: 'when will you come?'},
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>

            </div>
        </div>
    );
};

export default Dialogs