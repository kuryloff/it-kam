const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    //     {
    //         id: 1,
    //         photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
    //         followed: false,
    //         fullName: 'Kuryk I',
    //         status: 'i\'m the BOSS',
    //         location: {city: 'Lviv', country: 'Ukraine'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
    //         followed: true,
    //         fullName: 'Valera K',
    //         status: 'bulbash',
    //         location: {city: 'Grodno', country: 'Belarus'}
    //     },
    //     {id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ', followed: true, fullName: 'John D', status: 'alloha', location: {city: 'New Jersey', country: 'USA'}},
    //     {
    //         id: 4,
    //         photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
    //         followed: false,
    //         fullName: 'Dolph S',
    //         status: 'guten Tag',
    //         location: {city: 'Bonn', country: 'Germany'}
    //     },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id===action.userId){
                        return {...user, followed: true}
                    }
                    return user
                })
            };
            case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id===action.userId){
                        return {...user, followed: false}
                    }
                    return user
                })
            };
        case SET_USERS:{
            return{ ...state, users: [...state.users, ...action.users],
            }

        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;