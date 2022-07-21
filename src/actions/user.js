export const CHANGE_LOGIN_FIELD = 'CHANGE_SIGN_IN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_REGISTER_SUCESS = 'SUBMIT_REGISTER_SUCESS';
export const LOG_OUT = 'SUBMIT_LOGIN';

export const changeSignInField = (newValue, fieldName) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  fieldName,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitLoginSuccess = () => ({
  type: SUBMIT_LOGIN_SUCCESS,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const submitRegisterSuccess = () => ({
  type: SUBMIT_REGISTER_SUCESS,
});
