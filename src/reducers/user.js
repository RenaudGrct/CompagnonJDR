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

} from 'src/actions/user';

export const initialState = {

  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
  userId: 62,
  isLogged: true,
  isReadOnly: true,
  isGuest: false,
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

    case LOG_OUT:
      return {
        ...state,
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
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
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

    default:
      return state;
  }
};
export default reducer;
