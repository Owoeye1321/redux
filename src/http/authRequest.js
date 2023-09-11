import {
  fetchUserFailed,
  fetchUserSuccess,
  fetchUserRequest,
} from "../actions/userActions.js";

export const fetchUsers = async () => async (dispatch) => {
  dispatch(fetchUserRequest());
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const users = response.data.map((data) => data.id);
      dispatch(fetchUserSuccess(users));
    })
    .catch((error) => {
      dispatch(fetchUserFailed(error.message));
    });
};
