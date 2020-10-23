import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Enter your message'
                   component={Textarea}
                   name="newMessageBody"
                   validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messageElement = state.messages.map(m => <Message message={m.message}/>);
    const newMessageBody = state.newMessageBody

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};


export default Dialogs