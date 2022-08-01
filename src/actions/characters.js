export const CHANGE_NAME_INPUT = 'CHANGE_NAME_INPUT';
export const HANDLE_DICE_CLASS = 'HANDLE_DICE_CLASS';
export const CALCUL_DICE_SUM = 'CALCUL_DICE_SUM1';
export const RESET_DICE = 'RESET_DICE';
export const SELECT_RACE = 'SELECT_RACE';
export const SELECT_CLASS = 'SELECT_CLASS';
export const SELECT_BACKGROUND = 'SELECT_BACKGROUND';
export const HANDLE_MODAL_IS_CLOSED = 'HANDLE_MODAL_IS_CLOSED';

export const changeNameInput = (newValue) => ({
  type: CHANGE_NAME_INPUT,
  newValue,
});

export const handleDiceClass = (number, key) => ({
  type: HANDLE_DICE_CLASS,
  number,
  key,
});

export const CalculDiceSum = () => ({
  type: CALCUL_DICE_SUM,
});

export const resetDice = () => ({
  type: RESET_DICE,
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
