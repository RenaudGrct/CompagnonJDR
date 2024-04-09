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
  baseURL: 'https://api-compagnonjdr.onrender.com/',
  withCredentials: process.env.NODE_ENV === 'production',
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
          Authorization: `bearer ${user.token}`,
        },
      };

      instance(`races/${characters.character.selectedRace}`, config)
        .then((response) => {
          store.dispatch(getRaceSuccess(response.data));
        })
        .catch((error) => {
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
          Authorization: `bearer ${user.token}`,
        },
      };

      instance(`classes/${characters.character.selectedClass}`, config)
        .then((response) => {
          store.dispatch(getClassSuccess(response.data));
        })
        .catch((error) => {
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
          Authorization: `bearer ${user}`,
        },
      };

      instance('backgrounds', config)
        .then((response) => {
          store.dispatch(getBackgroundSuccess(response.data));
        })
        .catch((error) => {
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
            Authorization: `bearer ${userToken}`,
          },
          data: {
            character: {
              name: characters.character.name,
              race_id: Number(characters.character.fetchedCharacterRaceObject.id),
              class_id: Number(characters.character.fetchedCharacterClassObject.id),
              background_id: Number(characters.character.selectedBackground),
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
                intelligence: Number(characters.character.intelligence),
              },
          },
        };
        if (user.userId) {
          instance(`character/user/${user.userId}`, config)
            .then((response) => {
              store.dispatch(submitCharacterCreationSuccess(response.data));
            })
            .catch((error) => {
            })
            .finally(() => {
            });
        }
      } else {
        const config = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${userToken}`,
          },
          data: {
            character: {
              name: characters.character.name,
              race_id: Number(characters.character.fetchedCharacterRaceObject.id),
              class_id: Number(characters.character.fetchedCharacterClassObject.id),
              background_id: Number(characters.character.selectedBackground),
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
                  intelligence: Number(characters.character.intelligence),

                },
          },
        };
        if (user.guestId) {
          instance(`character/guest/${user.guestId}`, config)
            .then((response) => {
              store.dispatch(submitCharacterCreationSuccess(response.data));
            })
            .catch((error) => {
            })
            .finally(() => {
            });
        }
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
          Authorization: `bearer ${userToken}`,
        },
      };

      instance(`character/${characters.character.storedCharacterId}/user/${user.userId}`, config)
        .then((response) => {
          store.dispatch(submitCharacterDeletionSuccess(response.data));
        })
        .catch((error) => {
        })
        .finally(() => {
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
            Authorization: `bearer ${token}`,
          },
        };
        if (user.userId) {
          instance(`character/user/${user.userId}`, config)
            .then((response) => {
              store.dispatch(getAllCharactersSuccess(response.data));
            })
            .catch((error) => {
            })
            .finally(() => {
            });
        }
      } else {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        };
        if (user.guestId) {
          instance(`character/guest/${user.guestId}`, config)
            .then((response) => {
              store.dispatch(getAllCharactersSuccess(response.data));
            })
            .catch((error) => {
            })
            .finally(() => {
            });
        }
      }
      break;
    }

    case GET_CHARACTER: {
      const token = localStorage.getItem('token');
      const { user } = store.getState();
      next(action);
      if (!user.guestId) {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        };
        if (user.userId) {
          instance(`character/${action.id}/user/${user.userId}`, config)
            .then((response) => {
              store.dispatch(getCharacterSuccess(response.data));
            })
            .catch((error) => {
            })
            .finally(() => {
            });
        }
      } else {
        const config = {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        };
        if (user.guestId) {
          instance(`character/${action.id}/guest/${user.guestId}`, config)
            .then((response) => {
              store.dispatch(getCharacterSuccess(response.data));
            })
            .catch((error) => {
            })
            .finally(() => {
            });
        }
      }
      break;
    }
    default:
      next(action);
  }
};

export default charactersMiddleware;
