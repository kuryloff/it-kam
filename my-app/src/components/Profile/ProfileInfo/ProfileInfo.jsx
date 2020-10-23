import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png";
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({isOwner, profile, updateStatus, status, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData);
        // setEditMode(false)

    };

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img className={classes.logo} src={profile.photos.large || userPhoto} alt="logo"/> <br/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div><b>{profile.fullName}</b></div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>

};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>
                Edit
            </button>
        </div>}
        <div><b>Full name:</b> {profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob &&
        <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>
        }
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
};

export default ProfileInfo;
