import {
  CHANGE_INPUT_FIELD,
  SUBMIT_LOGIN_SUCCESS,
  LOG_OUT,
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_SUCESS,
  SUBMIT_REGISTER_ERROR,
  TOGGLE_IS_READONLY,
  HANDLE_IS_SAME_PASSWORD,
  HANDLE_IS_LOADING,
  SUBMIT_LOGIN_ERROR,
  SUBMIT_LOGIN,
  HANDLE_IS_REDIRECT,
} from 'src/actions/user';

export const initialState = {

  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
  isLogged: false,
  isReadOnly: true,
  isGuest: true,
  isSamePassword: false,
  submitError: false,
  isLoading: false,
  errorMessage: '',
  isRedirect: false,

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
        userName: '',
        userEmail: '',
        userPassword: '',
        isRedirect: true,
      };
    case SUBMIT_LOGIN_ERROR:
      return {
        ...state,
        submitError: true,
        errorMessage: action.message,
        isLoading: false,
      };

    case LOG_OUT:
      return {
        ...state,
        email: '',
        password: '',
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
    case SUBMIT_REGISTER_SUCESS:
      return {
        ...state,
        isLogged: true,
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        isGuest: false,
        isSamePassword: false,
        submitError: false,
        isLoading: false,
        isRedirect: true,
      };
    case SUBMIT_REGISTER_ERROR:
      return {
        ...state,
        submitError: true,
        errorMessage: action.message,
        isLoading: false,
      };
    case TOGGLE_IS_READONLY:
      return {
        ...state,
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        isReadOnly: !state.isReadOnly,
      };
    case HANDLE_IS_SAME_PASSWORD:
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
    default:
      return state;
  }
};
export default reducer;
