import { 
  RECEIVE_PROFILE_USERNAME,
  RECEIVE_PROFILE_NAME,
  RECEIVE_PROFILE_EMAIL,
  RECEIVE_PROFILE_PROFILE,
  RECEIVE_PROFILE_ROLE } from "../utils/actionTypes";

export const receiveDataUsername = username => ({
  type: RECEIVE_PROFILE_USERNAME,
  payload: { username },
});

export const receiveDataName = name => ({
  type: RECEIVE_PROFILE_NAME,
  payload: { name },
});

export const receiveDataEmail = email => ({
  type: RECEIVE_PROFILE_EMAIL,
  payload: { email },
});

export const receiveDataProfile = profile => ({
  type: RECEIVE_PROFILE_PROFILE,
  payload: { profile },
});

export const receiveDataRole = role => ({
  type: RECEIVE_PROFILE_ROLE,
  payload: { role },
});

