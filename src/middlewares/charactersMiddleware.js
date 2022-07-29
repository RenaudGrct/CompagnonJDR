/* eslint-disable no-unused-vars */
import axios from 'axios';

const charactersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default charactersMiddleware;
