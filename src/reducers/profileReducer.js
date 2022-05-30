import { RECEIVE_PROFILE_DATA, CLEAR_ALL } from "../utils/actionTypes";

const profileState = {
    username: null,
    firstname: null,
    lastname: null,
    email: null,
    profile: null,
    role: null
};

const profileReducer = (state = profileState, {type, payload}) => {
    switch(type){
         case RECEIVE_PROFILE_DATA:
             return {
                 username: payload.username,
                 firstname: payload.firstname,
                 lastname: payload.lastname,
                 email: payload.email,
                 profile: payload.profile,
                 role: payload.role
             };
        case CLEAR_ALL:
            return profileState;
        default:
            return state;         
    }
}

export default profileReducer;
