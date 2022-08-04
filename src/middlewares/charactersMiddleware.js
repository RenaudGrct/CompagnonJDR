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
  SUBMIT_CHARACTER_CREATION,
  submitCharacterCreationSuccess,
  SUBMIT_CHARACTER_DELETION,
  submitCharacterDeletionSuccess,

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
        url: `https://api-compagnon-jdr.herokuapp.com/api/races/${characters.character.selectedRace}`,
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
        url: `https://api-compagnon-jdr.herokuapp.com/api/classes/${characters.character.selectedClass}`,
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

    case SUBMIT_CHARACTER_CREATION: {
      const userToken = localStorage.getItem('token');
      const { characters } = store.getState();
      const { user } = store.getState();

      // GERER LOGIQUE USER VS GUEST

      next(action);

      const config = {

        method: 'post',
        url: `https://api-compagnon-jdr.herokuapp.com/api/character/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${userToken}`,
        },
        data: {
          character: {
            guest_id: user.userId,
            user_id: user.userId,
            name: characters.character.name,
            race_id: characters.character.fetchedCharacterRaceObject.id,
            class_id: characters.character.fetchedCharacterClassObject.id,
            background_id: characters.character.background.id,
          },
          // y en a deux
          skill_id:
          [characters.character.fetchedCharacterClassObject.proficiencies.skill.id,
            characters.character.fetchedCharacterClassObject.proficiencies.skill.id,
          ],
          // y en a un
          feature_choice_id: characters.character.fetchedCharacterRaceObject.feature.choices.id,

          /*
          faudra ajouter les modifiers qui se trouvent dans
          characters.character.characterRace.score_modifier
            */
          ability_score:
              {
                strength: characters.character.strength,
                charisma: characters.character.charisma,
                dexterity: characters.character.dexterity,
                wisdom: characters.character.wisdom,
                constitution: characters.character.constitution,
                intelligence: characters.character.intelligence,

              },
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(submitCharacterCreationSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('yes les tontons, je suis le finally du creation');
        });
      break;
    }

    case SUBMIT_CHARACTER_DELETION: {
      const userToken = localStorage.getItem('token');
      const { user } = store.getState();

      next(action);

      const config = {

        method: 'delete',
        url: `https://api-compagnon-jdr.herokuapp.com/api/character/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${userToken}`,
        },

        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(submitCharacterDeletionSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('yes les tontons, je suis le finally du deletion');
        });
      break;
    }

    default:
      next(action);
  }
};

export default charactersMiddleware;
