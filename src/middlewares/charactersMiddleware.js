/* eslint-disable no-unused-vars */
import axios from 'axios';
import { CALCUL_DICE_SUM1 } from '../actions/characters';

const charactersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default charactersMiddleware;
