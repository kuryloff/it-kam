import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
            my posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>

            <Post message={'Hi, how are you?'} likesCount={'12'}/>
            <Post message={`It's my first post`} likesCount={'21'}/>


        </div>
    );
};

export default MyPosts;