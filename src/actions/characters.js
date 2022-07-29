export const CHANGE_NAME_INPUT = 'CHANGE_NAME_INPUT';
export const HANDLE_DICE_CLASS = 'HANDLE_DICE_CLASS';
export const CALCUL_DICE_SUM = 'CALCUL_DICE_SUM1';

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
