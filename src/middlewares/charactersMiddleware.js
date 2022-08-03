import {
  GET_RACE,
  getRaceSuccess,
  GET_CLASS,
  getClassSuccess,
  raceIsFetched,
  classIsFetched,
  GET_BACKGROUND,
  getBackgroundSuccess,
  backgroundIsFetched,

} from 'src/actions/characters';

import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api-compagnon-jdr.herokuapp.com/api/',
//   withCredentials: true,
//   headers: { Authorization: localStorage.getItem('token') },
// });

const charactersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RACE: {
      const { characters } = store.getState();
      const { user } = store.getState();
      next(action);

      const config = {

        method: 'get',
        url: `https://api-compagnon-jdr.herokuapp.com/api/races/${characters.character.raceC}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          store.dispatch(getRaceSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(raceIsFetched());
        });
    }
      break;

    case GET_CLASS: {
      const { characters } = store.getState();
      const { user } = store.getState();
      console.log(`token ${user.token}`);

      next(action);

      const config = {

        method: 'get',
        url: `https://api-compagnon-jdr.herokuapp.com/api/classes/${characters.character.classC}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          store.dispatch(getClassSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(classIsFetched());
        });
    }
      break;

    case GET_BACKGROUND: {
      // const { user } = store.getState();
      const user = localStorage.getItem('token');
      next(action);

      const config = {

        method: 'get',
        url: 'https://api-compagnon-jdr.herokuapp.com/api/backgrounds',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(getBackgroundSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(backgroundIsFetched());
        });
      break;
    }

    default:
      next(action);
  }
};

export default charactersMiddleware;
