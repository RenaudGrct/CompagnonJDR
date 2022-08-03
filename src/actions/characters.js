export const CHANGE_NAME_INPUT = 'CHANGE_NAME_INPUT';
export const HANDLE_DICE_CLASS = 'HANDLE_DICE_CLASS_ONE';
export const SUM_DICE_THROW_ONE = 'SUM_DICE_THROW_ONE';
export const SUM_DICE_THROW_TWO = 'SUM_DICE_THROW_TWO';
export const SUM_DICE_THROW_THREE = 'SUM_DICE_THROW_THREE';
export const SUM_DICE_THROW_FOUR = 'SUM_DICE_THROW_FOUR';
export const SUM_DICE_THROW_FIVE = 'SUM_DICE_THROW_FIVE';
export const SUM_DICE_THROW_SIX = 'SUM_DICE_THROW_SIX';
export const RESET_THROWS = 'RESET_THROWS';
export const SELECT_RACE = 'SELECT_RACE';
export const SELECT_CLASS = 'SELECT_CLASS';
export const SELECT_BACKGROUND = 'SELECT_BACKGROUND';
export const HANDLE_MODAL_IS_CLOSED = 'HANDLE_MODAL_IS_CLOSED';
export const SELECT_STAT = 'SELECT_STAT';
export const GET_RACE = 'GET_RACE';
export const GET_RACE_SUCCESS = 'GET_RACE_SUCCESS';
export const GET_CLASS = 'GET_CLASS';
export const GET_CLASS_SUCCESS = 'GET_CLASS_SUCCESS';
export const GET_BACKGROUND = 'GET_BACKGROUND';
export const GET_BACKGROUND_SUCCESS = 'GET_BACKGROUND_SUCCESS';
export const RACE_IS_FETCHED = 'RACE_IS_FETCHED';
export const CLASS_IS_FETCHED = 'CLASS_IS_FETCHED';
export const BACKGROUND_IS_FETCHED = 'BACKGROUND_IS_FETCHED';
export const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';

export const changeNameInput = (newValue) => ({
  type: CHANGE_NAME_INPUT,
  newValue,
});

export const handleDiceClass = (number, diceResult, miniDiceResult) => ({
  type: HANDLE_DICE_CLASS,
  number,
  diceResult,
  miniDiceResult,
});

export const sumDiceThrowOne = (list) => ({
  type: SUM_DICE_THROW_ONE,
  list,
});
export const sumDiceThrowTwo = (list) => ({
  type: SUM_DICE_THROW_TWO,
  list,
});
export const sumDiceThrowThree = (list) => ({
  type: SUM_DICE_THROW_THREE,
  list,
});
export const sumDiceThrowFour = (list) => ({
  type: SUM_DICE_THROW_FOUR,
  list,
});
export const sumDiceThrowFive = (list) => ({
  type: SUM_DICE_THROW_FIVE,
  list,
});
export const sumDiceThrowSix = (list) => ({
  type: SUM_DICE_THROW_SIX,
  list,
});

export const resetThrows = () => ({
  type: RESET_THROWS,
});

export const handleModalIsClosed = () => ({
  type: HANDLE_MODAL_IS_CLOSED,
});

export const selectRace = (selectedRace) => ({
  type: SELECT_RACE,
  selectedRace,
});

export const selectClass = (selectedClass) => ({
  type: SELECT_CLASS,
  selectedClass,
});

export const selectBackground = (selectedBackground) => ({
  type: SELECT_BACKGROUND,
  selectedBackground,
});

export const selectStat = (key, number) => ({
  type: SELECT_STAT,
  key,
  number,
});

export const getRace = () => ({
  type: GET_RACE,
});

export const getRaceSuccess = (response) => ({
  type: GET_RACE_SUCCESS,
  response,
});

export const getClass = () => ({
  type: GET_CLASS,
});

export const getClassSuccess = (response) => ({
  type: GET_CLASS_SUCCESS,
  response,
});

export const getBackground = () => ({
  type: GET_BACKGROUND,
});

export const getBackgroundSuccess = (response) => ({
  type: GET_BACKGROUND_SUCCESS,
  response,
});

export const raceIsFetched = () => ({
  type: RACE_IS_FETCHED,
});

export const classIsFetched = () => ({
  type: CLASS_IS_FETCHED,
});

export const backgroundIsFetched = () => ({
  type: BACKGROUND_IS_FETCHED,
});

export const toggleIsFetched = () => ({
  type: TOGGLE_IS_FETCHED,
});
