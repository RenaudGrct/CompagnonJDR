import {
  HANDLE_DICE_CLASS,
  CALCUL_DICE_SUM,
} from 'src/actions/characters';

export const initialState = {

  characterName: '',
  dice: {
    result: {
      diceResult1: 1,
      diceResult2: 3,
      diceResult3: 5,
      diceResult4: 2,
    },
    diceSum1: null,
    diceSum2: null,
    diceSum3: null,
    diceSum4: null,
    isDiceSum1: false,
    isDiceSum2: false,
    isDiceSum3: false,
    isDiceSum4: false,
    listNumber: [],
  },

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
