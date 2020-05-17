import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, post: 'alloha', like: 12,},
        {id: 2, post: `that's me`, like: 124,},
        {id: 3, post: `my third post`, like: 124,},
    ]
};

it('length of posts should be incremented', () => {
    // 1. __test__ data
    let action = addPostActionCreator('kuryk');
//2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new posts should be correct', () => {
    // 1. __test__ data
    let action = addPostActionCreator('kuryk');
//2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[3].post).toBe('kuryk');
});

it('after deleting length of new posts should be decrement', () => {
    // 1. __test__ data
    let action = deletePost(1);
//2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2);
});
