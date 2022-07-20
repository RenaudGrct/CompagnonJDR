/* eslint-disable no-unused-vars */
import axios from 'axios';

import { SUBMIT_LOGIN, submitLoginSuccess } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      next(action);
      store.dispatch(submitLoginSuccess());
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
