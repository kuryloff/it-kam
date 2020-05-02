import React from 'react';
import classes from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, updateStatus, status}) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img className={classes.logo} src={
                    profile.photos.large !=null ? profile.photos.large: userPhoto
                }
                     alt=""/>
                     <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <h3>{profile.fullName}</h3>
            <span>{profile.lookingForAJobDescription}</span>
        </div>
    );
};

export default ProfileInfo;