import { 
    RECEIVE_ACCESS_TOKEN,
    RECEIVE_ID_TOKEN,
    GENERATE_STATE_AND_NONCE
 } from "../utils/actionTypes";


 export const recieveAccessToken = accessToken => ({
    type: RECEIVE_ACCESS_TOKEN,
    payload: {accessToken}
});

export const recieveIdToken = idToken => ({
    type: RECEIVE_ID_TOKEN,
    payload: {idToken}
});

export const generateStateAndNonce = () => ({
    type: GENERATE_STATE_AND_NONCE,
});