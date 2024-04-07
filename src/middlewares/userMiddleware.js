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
  GET_USER_PROFILE,
  saveUserProfile,

  GET_GUEST_PROFILE,
  saveGuestProfile,

  handleIsLoading,
  LOG_OUT,
  logOut,

  LOG_AS_GUEST,
  logAsGuestSuccess,
  logAsGuestError,

} from 'src/actions/user';

import { clearCharacters } from 'src/actions/characters';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: process.env.NODE_ENV === 'production',
});
// instance.interceptors.response.use(() => {
// });

// const setInstanceAuthorization = () => {
//   if (localStorage.getItem('token')) {
//     const token = localStorage.getItem('token');
//     instance.defaults.headers.common.authorization = token;
//   }
// };
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
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.removeItem('guestId', response.data.user.id);

        // setInstanceAuthorization();
      }
      catch (error) {
        store.dispatch(submitError(error.response.data));
      }
      store.dispatch(handleIsLoading());

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }

    case LOG_OUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      store.dispatch(clearCharacters());

      next(action);
      break;
    }
    case SUBMIT_REGISTER: {
      next(action);
      const { user } = store.getState();

      if (!user.guestId) {
        const config = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          data: { email: user.userEmail, username: user.userName, password: user.userPassword }
        };

        instance('auth/register', config)
          .then((response) => {
            store.dispatch(submitRegisterSuccess(response.data));
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('guestId');
          })
          .catch((error) => {
            store.dispatch(submitError(error.response.data));
          })
          .finally(() => {
            store.dispatch(handleIsLoading());
          });
      }
      else if (user.guestId) {
        const config = {

          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${user.token}`
          },
          data: { email: user.userEmail, username: user.userName, password: user.userPassword }
        };

        instance(`guest/${user.guestId}/confirm-register`, config)
          .then((response) => {
            store.dispatch(submitRegisterSuccess(response.data));
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('guestId');
          })
          .catch((error) => {
            store.dispatch(submitError(error.response.data));
          })
          .finally(() => {
            store.dispatch(handleIsLoading());
          });
      }

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }
    // case DELETE_USER_PROFILE: {
    //   const { user } = store.getState();

    //   next(action);

    //   try {
    //     const response = await instance.delete(`profile/${user.userId}`);
    //     store.dispatch(deleteUserProfileSuccess(response.data));
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('userId');
    //   }
    //   catch (error) {
    //     store.dispatch(deleteUserProfileError());
    //   }

    //   store.dispatch(logOut());
    // }
    //   break;

    case UPDATE_USER_PROFILE: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'patch',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`
        },
        data: {
          email: user.userEmail,
          username: user.userName,
          password: user.userPassword
        }
      };

      instance(`profile/${user.userId}`, config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError(error.response.data));
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });
    }
      break;

    case DELETE_USER_PROFILE: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`
        }
      };

      instance(`profile/${user.userId}`, config)
        .then((response) => {
          store.dispatch(deleteUserProfileSuccess(response.data));
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
        })
        .catch((error) => {
          store.dispatch(deleteUserProfileError(error.response.data));
        })
        .finally(() => {
          store.dispatch(logOut());
        });
    }
      break;

    case UPDATE_USER_PASSWORD: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'patch',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        data: { password: user.userPassword, newPassword: user.userNewPassword }
      };

      instance(`profile/${user.userId}`, config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError(error.response.data));
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });
    }
      break;

    case LOG_AS_GUEST: {
      next(action);
      const { user } = store.getState();

      const config = {

        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        }
      };

      instance('auth/guest', config)
        .then((response) => {
          store.dispatch(logAsGuestSuccess(response.data));
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('guestId', response.data.guest.id);
        })
        .catch((error) => {
          store.dispatch(logAsGuestError(error.response.data));
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });

      break;
    }

    case GET_USER_PROFILE: {
      const { user } = store.getState();

      const config = {

        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`
        }
      };
      if (user.userID) {
        instance(`profile/${user.userId}`, config)
          .then((response) => {
            store.dispatch(saveUserProfile(response.data));
          })
          .catch((error) => {
          });
      }
      break;
    }

    case GET_GUEST_PROFILE: {
      const { user } = store.getState();

      const config = {

        method: 'get',
        // NOUVELLE ROUTE
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`
        }
      };
      if (user.guestId) {
        instance(`guest/${user.guestId}`, config)
          .then((response) => {
            store.dispatch(saveGuestProfile(response.data));
          })
          .catch((error) => {
          });
      }
      break;
    }

    // case GET_USER_PROFILE2: {
    //   const { user } = store.getState();

    //   try {
    //     const response = await instance.get(`${user.userId}`);
    //     store.dispatch(saveUserProfile(response.data));
    //   }
    //   catch (error) {
    //   }
    // }
    //   break;

    default:
      next(action);
  }
};

export default userMiddleware;

// case GET_USER_PROFILE: {
//   const { user } = store.getState();

// const config = {

//   method: 'post',
//   url: `http://10.22.16.54:4000/api/profile/${user.userId}`,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `bearer ${user.token}`,
//   },
//   withCredentials: true,
// };

// axios(config)
//   .then((response) => {
//     store.dispatch(saveUserProfile(response.data));
//   })
//   .catch((error) => {

//   })

// break;
// }
