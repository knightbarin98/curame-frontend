import { combineReducers } from "redux";

import profileReducer from "./profileReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
    token: tokenReducer,
    profile: profileReducer
});