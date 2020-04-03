import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.wallpaper}
                     src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     alt="header logo"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.logo} src={props.profile.photos.large}
                     alt=""/>
            </div>
            <h3>{props.profile.fullName}</h3>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>
    );
};

export default ProfileInfo;