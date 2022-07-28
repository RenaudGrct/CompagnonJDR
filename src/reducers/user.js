import {
  CHANGE_INPUT_FIELD,
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  LOG_OUT,
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_SUCCESS,
  TOGGLE_IS_READONLY,
  TOGGLE_IS_CHANGE_PASSWORD,
  HANDLE_PROFILE_MENU,
  VERIFY_PASSWORD,
  HANDLE_IS_LOADING,
  SUBMIT_ERROR,
  HANDLE_IS_REDIRECT,
  HANDLE_IS_SUBMIT_ERROR,
  SAVE_USER_PROFILE,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
  DELETE_USER_PROFILE_SUCCESS,
  DELETE_USER_PROFILE_ERROR,
  LOG_AS_GUEST,
  LOG_AS_GUEST_SUCCESS,
  LOG_AS_GUEST_ERROR,
  VERIFY_TOKEN,
  RETRIEVE_USER_DATA_FROM_LOCALSTORAGE,

} from 'src/actions/user';

export const initialState = {

  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
  userNewPassword: '',
  userId: '',
  isLogged: false,
  isLoggedAsGuest: false,
  isReadOnly: true,
  isChangePassword: false,
  isSamePassword: false,
  submitError: false,
  isLoading: false,
  errorMessage: '',
  isRedirect: false,
  token: '',
  isSuccess: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
        submitError: false,
        isLoading: true,
      };

    case VERIFY_TOKEN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,

      };

    case RETRIEVE_USER_DATA_FROM_LOCALSTORAGE:
      return {
        ...state,
        token: action.token,
        userId: action.userId,

      };

    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoggedAsGuest: false,
        userId: action.user.id,
        userName: action.user.username,
        userEmail: action.user.email,
        userPassword: '',
        isRedirect: true,
        submitError: false,
        errorMessage: '',
        token: action.accessToken,
      };

    case LOG_OUT:
      return {
        ...state,
        userName: '',
        userEmail: '',
        userPassword: '',
        isLogged: false,
        isLoggedAsGuest: false,

      };
    case SUBMIT_REGISTER:
      return {
        ...state,
        isSamePassword: false,
        submitError: false,
        isLoading: true,
        isRedirect: false,
      };
    case SUBMIT_REGISTER_SUCCESS:
      return {
        ...state,
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        isLoggedAsGuest: false,
        isSamePassword: false,
        submitError: false,
        isLoading: false,
        isRedirect: true,
        errorMessage: '',
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        userPassword: '',
        userConfirmPassword: '',
        submitError: true,
        errorMessage: action.message,
        isLoading: false,
        isSamePassword: false,
      };
    case TOGGLE_IS_READONLY:
      return {
        ...state,
        isReadOnly: !state.isReadOnly,
      };
    case TOGGLE_IS_CHANGE_PASSWORD:
      return {
        ...state,
        isChangePassword: !state.isChangePassword,
      };
    case HANDLE_PROFILE_MENU:
      return {
        ...state,
        isReadOnly: true,
        isChangePassword: false,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        userPassword: '',
        userConfirmPassword: '',
        isSamePassword: true,
      };
    case HANDLE_IS_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case HANDLE_IS_REDIRECT:
      return {
        ...state,
        isRedirect: false,
      };
    case HANDLE_IS_SUBMIT_ERROR:
      return {
        ...state,
        submitError: false,
      };
    case SAVE_USER_PROFILE:
      return {
        ...state,
        userName: action.username,
        userEmail: action.email,
        userId: action.id,
        isLogged: true,
        isLoading: false,
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isSamePassword: false,
        userPassword: '',
        userConfirmPassword: '',
        userNewPassword: '',
        submitError: false,
        isLoading: false,
        isRedirect: true,
        isSuccess: true,

      };
    case UPDATE_USER_PROFILE_ERROR:
      return {
        ...state,
        isSamePassword: false,
        userPassword: '',
        userConfirmPassword: '',
        userNewPassword: '',
        submitError: true,
        errorMessage: action.message,
        isLoading: false,

      };
    case DELETE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLogged: false,
        submitError: false,
        errorMessage: '',
      };
    case DELETE_USER_PROFILE_ERROR:
      return {
        ...state,
        submitError: true,
        errorMessage: action.message,

      };
    case LOG_AS_GUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOG_AS_GUEST_SUCCESS:
      return {
        ...state,
        isLogged: false,
        isLoggedAsGuest: true,
        userId: action.user.id,
        userName: action.user.username,
        userEmail: action.user.email,
        token: action.accesToken,
        userPassword: '',
        submitError: false,
        errorMessage: '',
        isLoading: true,
      };
    case LOG_AS_GUEST_ERROR:
      return {
        ...state,
        submitError: true,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};
export default reducer;
