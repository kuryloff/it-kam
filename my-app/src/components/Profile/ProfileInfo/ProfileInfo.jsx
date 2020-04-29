import React from 'react';
import classes from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={classes.wallpaper}*/}
            {/*         src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"*/}
            {/*         alt="header logo"/>*/}
            {/*</div>*/}

            <div className={classes.descriptionBlock}>
                <img className={classes.logo} src={
                    props.profile.photos.large !=null ? props.profile.photos.large: userPhoto
                }
                     alt=""/>
                     <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <h3>{props.profile.fullName}</h3>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>
    );
};

export default ProfileInfo;