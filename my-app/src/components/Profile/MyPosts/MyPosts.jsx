import React, {createRef} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post message={p.post} likesCount={p.like}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;