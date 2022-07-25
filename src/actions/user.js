export const CHANGE_INPUT_FIELD = 'CHANGE_INPUT_FIELD';
export const TOGGLE_IS_READONLY = 'TOGGLE_IS_READONLY';
export const VERIFY_PASSWORD = 'VERIFY_PASSWORD';
export const HANDLE_IS_LOADING = 'HANDLE_IS_LOADING';
export const HANDLE_IS_REDIRECT = 'HANDLE_IS_REDIRECT';

// USER CRUD
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const SUBMIT_REGISTER_SUCCESS = 'SUBMIT_REGISTER_SUCCESS';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_OUT = 'LOG_OUT';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';

export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE';
export const DELETE_USER_PROFILE_SUCCESS = 'DELETE_USER_PROFILE_SUCCESS';
export const DELETE_USER_PROFILE_ERROR = 'DELETE_USER_PROFILE_ERROR';

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR';

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

export const verifyPassword = () => ({
  type: VERIFY_PASSWORD,
});

export const toggleIsReadOnly = () => ({
  type: TOGGLE_IS_READONLY,
});

export const handleIsLoading = () => ({
  type: HANDLE_IS_LOADING,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const submitError = (response) => ({
  type: SUBMIT_ERROR,
  ...response,
});

export const submitRegisterSuccess = (response) => ({
  type: SUBMIT_REGISTER_SUCCESS,
  ...response,
});

export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
});
export const saveUserProfile = (response) => ({
  type: SAVE_USER_PROFILE,
  ...response,
});
export const deleteUserProfile = () => ({
  type: DELETE_USER_PROFILE,
});

export const deleteUserProfileSuccess = (response) => ({
  type: DELETE_USER_PROFILE_SUCCESS,
  ...response,
});

export const deleteUserProfileError = (response) => ({
  type: DELETE_USER_PROFILE_ERROR,
  ...response,
});

export const updateUserProfile = () => ({
  type: UPDATE_USER_PROFILE,
});

export const updateUserProfileError = () => ({
  type: UPDATE_USER_PROFILE_ERROR,
});

export const updateUserProfileSuccess = () => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
});

export const handleIsRedirect = () => ({
  type: HANDLE_IS_REDIRECT,
});
