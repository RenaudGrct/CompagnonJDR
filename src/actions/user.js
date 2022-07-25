export const CHANGE_INPUT_FIELD = 'CHANGE_INPUT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_REGISTER_SUCESS = 'SUBMIT_REGISTER_SUCESS';
export const LOG_OUT = 'SUBMIT_LOGIN';
export const TOGGLE_IS_READONLY = 'TOGGLE_IS_READONLY';
export const HANDLE_IS_SAME_PASSWORD = 'HANDLE_IS_SAME_PASSWORD';
export const SUBMIT_REGISTER_ERROR = 'SUBMIT_REGISTER_ERROR';
export const HANDLE_IS_LOADING = 'HANDLE_IS_LOADING';
export const SUBMIT_LOGIN_ERROR = 'SUBMIT_LOGIN_ERROR';
export const HANDLE_IS_REDIRECT = 'HANDLE_IS_REDIRECT';

export const changeInputField = (newValue, fieldName) => ({
  type: CHANGE_INPUT_FIELD,
  newValue,
  fieldName,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitLoginSuccess = (response) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  ...response,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const handleIsSamePassword = () => ({
  type: HANDLE_IS_SAME_PASSWORD,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const submitRegisterSuccess = (response) => ({
  type: SUBMIT_REGISTER_SUCESS,
  ...response,
});

export const toggleIsReadOnly = () => ({
  type: TOGGLE_IS_READONLY,
});

export const submitRegisterError = (response) => ({
  type: SUBMIT_REGISTER_ERROR,
  ...response,
});

export const submitLoginError = (response) => ({
  type: SUBMIT_LOGIN_ERROR,
  ...response,
});

export const handleIsLoading = () => ({
  type: HANDLE_IS_LOADING,
});

export const handleIsRedirect = () => ({
  type: HANDLE_IS_REDIRECT,
});
