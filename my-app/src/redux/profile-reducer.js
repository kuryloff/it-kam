import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, post: 'alloha', like: 12,},
        {id: 2, post: `that's me`, like: 124,},
        {id: 3, post: `my third post`, like: 124,},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: action.newPostText, like: 0,}],
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setStatus = (status) =>({type: SET_STATUS, status});
const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});

export const getStatus = (userId) => (dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response=>{
        dispatch(setStatus(response.data));
    })
};

export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status).then(response=>{
        if (response.data.resultCode === 0)
        dispatch(setStatus(status));
    })
};

export const getUserProfile = (userId) => {
    return (dispatch) =>{
        usersAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
    }
};
export default profileReducer;