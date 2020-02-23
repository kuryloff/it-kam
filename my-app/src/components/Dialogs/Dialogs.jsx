import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Kuryk</div>
                <div className={classes.dialog}>Frostyk</div>
                <div className={classes.dialog}>Someone</div>

            </div>
            <div className={classes.messages}>
                <div className={classes.messsage}>Hi</div>
                <div className={classes.messsage}>How are you</div>
                <div className={classes.messsage}>YO</div>

            </div>
        </div>
    );
};

export default Dialogs