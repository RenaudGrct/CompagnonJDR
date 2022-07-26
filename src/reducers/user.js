import {
  CHANGE_INPUT_FIELD,
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  LOG_OUT,
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_SUCCESS,
  TOGGLE_IS_READONLY,
  VERIFY_PASSWORD,
  HANDLE_IS_LOADING,
  SUBMIT_ERROR,
  HANDLE_IS_REDIRECT,
  SAVE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  DELETE_USER_PROFILE_SUCCESS,
  DELETE_USER_PROFILE_ERROR,
  LOG_AS_GUEST,
  LOG_AS_GUEST_SUCCESS,
  LOG_AS_GUEST_ERROR,

} from 'src/actions/user';

export const initialState = {

  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
  userId: '',
  isLogged: false,
  isReadOnly: true,
  isGuest: false,
  isSamePassword: false,
  submitError: false,
  isLoading: false,
  errorMessage: '',
  isRedirect: false,
  token: '',

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

    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isGuest: false,
        userId: action.user.id,
        userName: action.user.username,
        userEmail: action.user.email,
        userPassword: '',
        isRedirect: true,
        submitError: false,
        errorMessage: '',
      };

    case LOG_OUT:
      return {
        ...state,
        userName: '',
        userEmail: '',
        userPassword: '',
        isLogged: false,
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
        isGuest: false,
        isSamePassword: false,
        submitError: false,
        isLoading: false,
        isRedirect: true,
        errorMessage: '',
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        submitError: true,
        errorMessage: action.message,
        isLoading: false,
      };
    case TOGGLE_IS_READONLY:
      return {
        ...state,
        isReadOnly: !state.isReadOnly,
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
    case SAVE_USER_PROFILE:
      return {
        ...state,
        userName: action.username,
        userEmail: action.email,
        userId: action.id,
        isLoading: false,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,

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
        isLogged: true,
        userId: action.user.id,
        userName: action.user.username,
        userEmail: action.user.email,
        token: action.accesToken,
        userPassword: '',
        submitError: false,
        errorMessage: '',
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
