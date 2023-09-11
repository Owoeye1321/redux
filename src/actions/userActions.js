import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../resources/types.js";

export const fetchUserRequest = async () => {
  return { type: FETCH_USER_REQUEST };
};

export const fetchUserSuccess = async (users) => {
  return { type: FETCH_USER_SUCCESS, payload: users };
};

export const fetchUserFailed = async (error) => {
  return { type: FETCH_USER_FAILED, payload: error };
};
