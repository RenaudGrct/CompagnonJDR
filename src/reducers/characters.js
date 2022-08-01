import {
  HANDLE_DICE_CLASS,
  CALCUL_DICE_SUM,
  RESET_DICE,
  CHANGE_NAME_INPUT,
  SELECT_RACE,
  SELECT_CLASS,
  HANDLE_MODAL_IS_CLOSED,
  SELECT_BACKGROUND,
} from 'src/actions/characters';

export const initialState = {

  characterName: '',
  characterRace: '',
  characterBackground: '',
  raceIsClosed: true,
  classIsClosed: true,
  characterClass: '',
  dice: {
    result: {
      diceResult1: 1,
      diceResult2: 3,
      diceResult3: 5,
      diceResult4: 2,
    },
    isDiceSum1: false,
  },

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME_INPUT:
      return {
        ...state,
        characterName: action.newValue,
      };
    case HANDLE_DICE_CLASS:
      return {
        ...state,
        dice: {
          ...state.dice,
          result: {
            ...state.dice.result,
            [action.key]: action.number,
          },
        },
      };
    case CALCUL_DICE_SUM:
      return {
        ...state,
        dice: {
          ...state.dice,
          isDiceSum1: true,
        },
      };
    case RESET_DICE:
      return {
        ...state,
        dice: {
          ...state.dice,
          isDiceSum1: false,
        },
      };
    case HANDLE_MODAL_IS_CLOSED:
      return {
        ...state,
        raceIsClosed: true,
      };

    case SELECT_RACE:
      return {
        ...state,
        characterRace: action.selectedRace,
        raceIsClosed: false,

      };

    case SELECT_CLASS:
      return {
        ...state,
        characterClass: action.selectedClass,
        raceIsClosed: false,

      };
    case SELECT_BACKGROUND:
      return {
        ...state,
        characterBackground: action.selectedBackground,
        raceIsClosed: false,

      };

    default:
      return state;
  }
};

export default reducer;
