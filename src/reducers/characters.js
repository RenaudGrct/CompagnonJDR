import {
  HANDLE_DICE_CLASS,
  SUM_DICE_THROW_ONE,
  SUM_DICE_THROW_TWO,
  SUM_DICE_THROW_THREE,
  SUM_DICE_THROW_FOUR,
  SUM_DICE_THROW_FIVE,
  SUM_DICE_THROW_SIX,
  RESET_THROWS,
  CHANGE_NAME_INPUT,
  SELECT_RACE,
  SELECT_CLASS,
  HANDLE_MODAL_IS_CLOSED,
  SELECT_BACKGROUND,
  SELECT_STAT,
} from 'src/actions/characters';

export const initialState = {

  character: {

    name: '',
    raceC: '',
    backgroundC: '',
    classC: '',
    modalIsClosed: true,
    strength: '',
    charisma: '',
    dexterity: '',
    wisdom: '',
    constitution: '',
    intelligence: '',
  },

  dice: {
    result: {
      diceResultOne: 1,
      diceResultTwo: 3,
      diceResultThree: 5,
      diceResultFour: 2,
      diceResultBestThree: 10,

    },
    resultDisplay: {
      sumOne: '',
      sumTwo: '',
      sumThree: '',
      sumFour: '',
      sumFive: '',
      sumSix: '',
      isDiceSumOne: false,
      isDiceSumTwo: false,
      isDiceSumThree: false,
      isDiceSumFour: false,
      isDiceSumFive: false,
      isDiceSumSix: false,
      miniDice1: '',
      miniDice2: '',
      miniDice3: '',
      miniDice4: '',
      miniDice5: '',
      miniDice6: '',
      miniDice7: '',
      miniDice8: '',
      miniDice9: '',
      miniDice10: '',
      miniDice11: '',
      miniDice12: '',
      miniDice13: '',
      miniDice14: '',
      miniDice15: '',
      miniDice16: '',
      miniDice17: '',
      miniDice18: '',
      miniDice19: '',
      miniDice20: '',
      miniDice21: '',
      miniDice22: '',
      miniDice23: '',
      miniDice24: '',
    },
  },

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME_INPUT:
      return {
        ...state,
        character: {
          ...state.character,
          name: action.newValue,
        },
      };
    case SELECT_RACE:
      return {
        ...state,
        character: {
          ...state.character,
          raceC: action.selectedRace,
          modalIsClosed: false,
        },
      };
    case SELECT_CLASS:
      return {
        ...state,
        character: {
          ...state.character,
          classC: action.selectedClass,
          modalIsClosed: false,
        },
      };
    case SELECT_BACKGROUND:
      return {
        ...state,
        character: {
          ...state.character,
          backgroundC: action.selectedBackground,
          modalIsClosed: false,
        },
      };
    case HANDLE_DICE_CLASS:
      return {
        ...state,
        dice: {
          ...state.dice,
          result: {
            ...state.dice.result,
            [action.diceResult]: action.number,
          },
          resultDisplay: {
            ...state.dice.resultDisplay,
            [action.miniDiceResult]: action.number,
          },
        },
      };
    case SUM_DICE_THROW_ONE:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumOne: action.list,
            isDiceSumOne: true,
          },
        },
      };
    case SUM_DICE_THROW_TWO:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumTwo: action.list,
            isDiceSumTwo: true,
          },
        },
      };
    case SUM_DICE_THROW_THREE:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumThree: action.list,
            isDiceSumThree: true,
          },
        },
      };
    case SUM_DICE_THROW_FOUR:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumFour: action.list,
            isDiceSumFour: true,
          },
        },
      };
    case SUM_DICE_THROW_FIVE:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumFive: action.list,
            isDiceSumFive: true,
          },
        },
      };
    case SUM_DICE_THROW_SIX:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumSix: action.list,
            isDiceSumSix: true,
          },
        },
      };
    case RESET_THROWS:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            isDiceSumOne: false,
            sumOne: '',
            isDiceSumTwo: false,
            sumTwo: '',
            isDiceSumThree: false,
            sumThree: '',
            isDiceSumFour: false,
            sumFour: '',
            isDiceSumFive: false,
            sumFive: '',
            isDiceSumSix: false,
            sumSix: '',
            miniDice1: '',
            miniDice2: '',
            miniDice3: '',
            miniDice4: '',
            miniDice5: '',
            miniDice6: '',
            miniDice7: '',
            miniDice8: '',
            miniDice9: '',
            miniDice10: '',
            miniDice11: '',
            miniDice12: '',
            miniDice13: '',
            miniDice14: '',
            miniDice15: '',
            miniDice16: '',
            miniDice17: '',
            miniDice18: '',
            miniDice19: '',
            miniDice20: '',
            miniDice21: '',
            miniDice22: '',
            miniDice23: '',
            miniDice24: '',

          },
        },
      };
    case HANDLE_MODAL_IS_CLOSED:
      return {
        ...state,
        character: {
          ...state.character,
          modalIsClosed: true,
        },
      };
    case SELECT_STAT:
      return {
        ...state,
        character: {
          ...state.character,
          [action.key]: action.number,

        },

      };
    default:
      return state;
  }
};

export default reducer;
