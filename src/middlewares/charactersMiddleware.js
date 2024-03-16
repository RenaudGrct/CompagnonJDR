import {
  GET_RACE,
  getRaceSuccess,
  GET_CLASS,
  getClassSuccess,
  raceIsFetched,
  classIsFetched,
  GET_BACKGROUND,
  getBackgroundSuccess,
  // backgroundIsFetched,
  SUBMIT_CHARACTER_CREATION,
  submitCharacterCreationSuccess,
  SUBMIT_CHARACTER_DELETION,
  submitCharacterDeletionSuccess,
  GET_ALL_CHARACTERS,
  getAllCharactersSuccess,
  GET_CHARACTER,
  getCharacterSuccess,

} from 'src/actions/characters';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://10.22.16.54:4000/api/',
  withCredentials: true
});

const charactersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RACE: {
      const { characters } = store.getState();
      const { user } = store.getState();
      next(action);

      const config = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`
        }
      };

      instance(`races/${characters.character.selectedRace}`, config)
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

      next(action);

      const config = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`
        }
      };

      instance(`classes/${characters.character.selectedClass}`, config)
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user}`
        }
      };

      instance('backgrounds', config)
        .then((response) => {
          store.dispatch(getBackgroundSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      // .finally(() => {
      //   store.dispatch(backgroundIsFetched());
      // });
      break;
    }

    case SUBMIT_CHARACTER_CREATION: {
      const userToken = localStorage.getItem('token');
      const { characters } = store.getState();
      const { user } = store.getState();

      // GERER LOGIQUE USER VS GUEST

      next(action);
      if (!user.guestId) {
        const config = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${userToken}`
          },
          data: {
            character: {
              name: characters.character.name,
              race_id: Number(characters.character.fetchedCharacterRaceObject.id),
              class_id: Number(characters.character.fetchedCharacterClassObject.id),
              background_id: Number(characters.character.selectedBackground)
            },
            // y en a deux
            skill_id: characters.character.skills,
            // y en a un
            feature_choice_id: Number(characters.character.classAbility),

            /*
          faudra ajouter les modifiers qui se trouvent dans
          characters.character.characterRace.score_modifier
            */
            ability_score:
              {
                strength: Number(characters.character.strength),
                charisma: Number(characters.character.charisma),
                dexterity: Number(characters.character.dexterity),
                wisdom: Number(characters.character.wisdom),
                constitution: Number(characters.character.constitution),
                intelligence: Number(characters.character.intelligence)
              }
          }
        };
        console.log(config.data);

        instance(`character/user/${user.userId}`, config)
          .then((response) => {
            store.dispatch(submitCharacterCreationSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log('yes les tontons, je suis le finally du creation');
          });
      }
      else if (user.guestId) {
        const config = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${userToken}`
          },
          data: {
            character: {
              name: characters.character.name,
              race_id: Number(characters.character.fetchedCharacterRaceObject.id),
              class_id: Number(characters.character.fetchedCharacterClassObject.id),
              background_id: Number(characters.character.selectedBackground)
            },
            // y en a deux
            skill_id: characters.character.skills,
            // y en a un
            feature_choice_id: Number(characters.character.classAbility),

            /*
            faudra ajouter les modifiers qui se trouvent dans
            characters.character.characterRace.score_modifier
              */
            ability_score:
                {
                  strength: Number(characters.character.strength),
                  charisma: Number(characters.character.charisma),
                  dexterity: Number(characters.character.dexterity),
                  wisdom: Number(characters.character.wisdom),
                  constitution: Number(characters.character.constitution),
                  intelligence: Number(characters.character.intelligence)

                }
          }
        };
        console.log(config.data);

        instance(`character/guest/${user.guestId}`, config)
          .then((response) => {
            store.dispatch(submitCharacterCreationSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log('yes les tontons, je suis le finally du creation');
          });
      }
      break;
    }

    case SUBMIT_CHARACTER_DELETION: {
      const userToken = localStorage.getItem('token');
      const { user } = store.getState();
      const { characters } = store.getState();

      next(action);

      const config = {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${userToken}`
        }
      };

      instance(`character/${characters.character.storedCharacterId}/user/${user.userId}`, config)
        .then((response) => {
          store.dispatch(submitCharacterDeletionSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('yes les tontons, je suis le finally du deletion');
        });
    }
      break;

    case GET_ALL_CHARACTERS: {
      const token = localStorage.getItem('token');
      const { user } = store.getState();
      next(action);
      if (!user.guestId) {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`
          }
        };
        instance(`character/user/${user.userId}`, config)
          .then((response) => {
            console.log(user.userId);
            store.dispatch(getAllCharactersSuccess(response.data));
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log(`userId: ${user.userId}`);
            console.log(`url ${config.url}`);
            console.log('yes les tontons, je suis le finally du get_all_characters user');
          });
      }
      else if (user.guestId) {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`
          }
        };
        instance(`character/guest/${user.guestId}`, config)
          .then((response) => {
            store.dispatch(getAllCharactersSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log(`userId: ${user.guestId}`);
            console.log(`url ${config.url}`);
            console.log('yes les tontons, je suis le finally du get_all_characters guest');
          });
      }
      break;
    }

    case GET_CHARACTER: {
      const token = localStorage.getItem('token');
      const { user } = store.getState();
      const { characters } = store.getState();
      next(action);
      if (!user.guestId) {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`
          }
        };
        instance(`character/${characters.character.storedCharacterId}/user/${user.userId}`, config)
          .then((response) => {
            store.dispatch(getCharacterSuccess(response.data));
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log(`url ${config.url}`);
            console.log('yes les tontons, je suis le finally du get_character user');
          });
      }
      else if (user.guestId) {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`
          }
        };
        instance(`character/${characters.character.storedCharacterId}/guest/${user.guestId}`, config)
          .then((response) => {
            store.dispatch(getCharacterSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log(`url ${config.url}`);
            console.log('yes les tontons, je suis le finally du get_character guest');
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default charactersMiddleware;
