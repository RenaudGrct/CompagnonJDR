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
