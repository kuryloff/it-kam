import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, post: 'alloha', like: 12,},
        {id: 2, post: `that's me`, like: 124,},
        {id: 3, post: `my third post`, like: 124,},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText:'',
                posts: [...state.posts, {id: 4, post: state.newPostText, like: 0,}],
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text});
const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => {
    return (dispatch) =>{
        usersAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
    }
};
export default profileReducer;