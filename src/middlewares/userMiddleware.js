/* eslint-disable no-unused-vars */
import axios from 'axios';

import {
  SUBMIT_LOGIN,
  submitLoginSuccess,
  SUBMIT_REGISTER,
  submitRegisterSuccess,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      store.dispatch(submitLoginSuccess());
      next(action);
      break;
    }
    case SUBMIT_REGISTER: {
      next(action);
      store.dispatch(submitRegisterSuccess());
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
