import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'social-network/app/SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const setInitializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    let promise = await dispatch(getAuthUserData());
    await Promise.all([promise]);
        dispatch(setInitializedSuccess())
};

// export const initializeApp = () => (dispatch) => {
//     let promise = dispatch(getAuthUserData());
//     Promise.all([promise])
//         .then(()=> {dispatch(setInitializedSuccess())
//         })
// };

export default appReducer;