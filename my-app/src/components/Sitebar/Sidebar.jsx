import React from "react";
import classes from './Sidebar.module.css'
import FriendItem from './FriendItem/FriendItem';


const Sidebar = (props) => {
let friend = props.friendsArray.map(f => <FriendItem name={f.name} id={f.id} img={f.img}/>);

    return (
        <div className={classes.content}>
            <div>
                <p>Friends</p>
            </div>
            <div className={classes.friendsBlock}>
                {friend}
            </div>
        </div>
    );
};

export default Sidebar;