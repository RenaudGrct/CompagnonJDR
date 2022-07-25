import axios from 'axios';

import {
// Login user
  SUBMIT_LOGIN,
  submitLoginSuccess,
  submitError,

  // Register user
  SUBMIT_REGISTER,
  submitRegisterSuccess,

  // Delete user
  DELETE_USER_PROFILE,
  deleteUserProfileSuccess,
  deleteUserProfileError,

  // Update user
  UPDATE_USER_PROFILE,
  updateUserProfileSuccess,
  updateUserProfileError,

  // Get user
  GET_USER_PROFILE,
  handleIsLoading,

  logOut,

} from 'src/actions/user';

const instance = axios.create({
  baseURL: 'https://api-compagnon-jdr.herokuapp.com/api/profile/',
});

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { user } = store.getState();

      next(action);
      try {
        const response = await instance.post('login', {
          email: user.userEmail,
          password: user.userPassword,
        });
        store.dispatch(submitLoginSuccess(response.data));
        console.log(response);
      }
      catch (error) {
        store.dispatch(submitError(error.response.data));
        console.log(error);
      }
      store.dispatch(handleIsLoading());

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }
    case SUBMIT_REGISTER: {
      next(action);
      const { user } = store.getState();

      const config = {

        method: 'post',
        url: 'https://api-compagnon-jdr.herokuapp.com/api/profile/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { email: user.userEmail, username: user.userName, password: user.userPassword },
      };

      axios(config)
        .then((response) => {
          store.dispatch(submitRegisterSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(submitError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }
    case DELETE_USER_PROFILE: {
      const { user } = store.getState();

      next(action);

      try {
        const response = await instance.delete(`${user.userId}`);
        store.dispatch(deleteUserProfileSuccess(response.data));
        console.log(response);
      }
      catch (error) {
        store.dispatch(deleteUserProfileError());
        console.log(error);
      }

      store.dispatch(logOut());
    }
      break;

    case UPDATE_USER_PROFILE: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'patch',
        url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
        headers: { },
      };

      axios(config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError());
          console.log(error);
        })
        .finally(() => {
          console.log('je suis le finally');
        });
    }
      break;

    case GET_USER_PROFILE: {
      const { user } = store.getState();

      try {
        const response = await instance.get(`${user.userId}`);
        console.log(response);
        // store.dispatch(saveUserProfile(response));
        // console.log(response.data)
        // console.log(`User email is ${user.userEmail}`);
      }
      catch (error) {
        console.log(error);
      }
    }
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
