import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "731688df-e320-45c4-ac98-bd4f7ac14174"
    }
});

export const usersAPI ={
    getUsers(currentPage = 1, pageSize=1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI ')
        return profileAPI.getProfile(userId);
    },

    followUser(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollowUser(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
};

export const profileAPI ={
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status })

    },
};

export const authAPI = {
    me(){
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe= false){
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout(){
        return instance.delete('auth/login');
    }
};






