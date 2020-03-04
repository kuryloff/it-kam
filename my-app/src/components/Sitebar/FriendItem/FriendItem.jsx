import React from "react";
import classes from './FriendItem.module.css'




const FriendItem = (props) => {

    return (

        <div className={classes.friendBlock}>
            <img src={props.img} alt=""/>
            <span className={classes.nickname}>{props.name}</span>
        </div>

    );
};

export default FriendItem;