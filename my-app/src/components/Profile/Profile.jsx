import React from 'react';
// import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPosts-container";


const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;