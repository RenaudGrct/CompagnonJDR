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
  UPDATE_USER_PASSWORD,

  // Get user
  // GET_USER_PROFILE,
  // saveUserProfile,

  handleIsLoading,
  logOut,

  LOG_AS_GUEST,
  logAsGuestSuccess,
  logAsGuestError,

} from 'src/actions/user';

const instance = axios.create({
  baseURL: 'https://api-compagnon-jdr.herokuapp.com/api/',
  withCredentials: true,
});

// const setInstanceAuthorization = () => {
//   if (localStorage.getItem('token')) {
//     const token = localStorage.getItem('token');
//     instance.defaults.headers.common.authorization = token;
//     console.log(instance.defaults.headers.common);
//   }
// }
// setInstanceAuthorization();

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { user } = store.getState();

      next(action);
      try {
        const response = await instance.post('auth/login', {
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
        url: 'https://api-compagnon-jdr.herokuapp.com/api/auth/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { email: user.userEmail, username: user.userName, password: user.userPassword },
        withCredentials: true,
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
        const response = await instance.delete(`profile/${user.userId}`);
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        data: {
          email: user.userEmail,
          username: user.userName,
          password: user.userPassword,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });
    }
      break;

    case UPDATE_USER_PASSWORD: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'patch',
        url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        data: { password: user.userPassword, newPassword: user.userNewPassword },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });
    }
      break;

    case LOG_AS_GUEST: {
      next(action);

      const config = {

        method: 'post',
        url: 'https://api-compagnon-jdr.herokuapp.com/api/auth/guest',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(logAsGuestSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(logAsGuestError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });

      break;
    }

    // case GET_USER_PROFILE: {
    //   const { user } = store.getState();

    //   try {
    //     const response = await instance.get(`${user.userId}`);
    //     console.log(response);
    //     store.dispatch(saveUserProfile(response.data));
    //     // console.log(response.data)
    //     console.log(`User email is ${response.data.email}`);
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // }
    //   break;

    default:
      next(action);
  }
};

export default userMiddleware;
