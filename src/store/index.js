import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import charactersMiddleware from '../middlewares/charactersMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    charactersMiddleware,
    userMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
