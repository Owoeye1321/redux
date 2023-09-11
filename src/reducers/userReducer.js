import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../resources/types.js";

const initialUserState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (previousState = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return { ...previousState, loading: true };
    }
    case FETCH_USER_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case FETCH_USER_FAILED: {
      return {
        loading: false,
        error: action.payload,
        users: [],
      };
    }
    default:
      return previousState;
  }
};
