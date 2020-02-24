import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData =[
        {id: 1, post: 'alloha', like:12},
        {id: 2, post: `that's me`, like:124},
    ];



    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].post} likesCount={postsData[0].like}/>
                <Post message={postsData[1].post} likesCount={postsData[1].like}/>
            </div>

        </div>
    );
};

export default MyPosts;