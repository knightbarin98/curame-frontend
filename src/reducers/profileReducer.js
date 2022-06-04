import {
  RECEIVE_PROFILE_USERNAME,
  RECEIVE_PROFILE_NAME,
  RECEIVE_PROFILE_EMAIL,
  RECEIVE_PROFILE_PROFILE,
  RECEIVE_PROFILE_ROLE,
  CLEAR_ALL,
} from "../utils/actionTypes";

const profileState = {
  username: null,
  name: null,
  email: null,
  profile: null,
  role: null,
};

const profileReducer = (state = profileState, { type, payload }) => {
  switch (type) {
    case RECEIVE_PROFILE_USERNAME:
      return {
        ...state,
        username: payload.username,
      };
    case RECEIVE_PROFILE_NAME:
      return {
        ...state,
        name: payload.name,
      };
    case RECEIVE_PROFILE_EMAIL:
      return {
        ...state,
        email: payload.email,
      };
    case RECEIVE_PROFILE_PROFILE:
      return {
        ...state,
        profile: payload.profile,
      };
    case RECEIVE_PROFILE_ROLE:
      return {
        ...state,
        role: payload.role,
      };
    case CLEAR_ALL:
      return profileState;
    default:
      return state;
  }
};

export default profileReducer;
