import {
  CHANGE_INPUT_FIELD,
  SUBMIT_LOGIN_SUCCESS,
  LOG_OUT,
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_SUCCESS,
  SUBMIT_REGISTER_ERROR,
  TOGGLE_IS_READONLY,
  VERIFY_PASSWORD,
  HANDLE_IS_LOADING,
  SAVE_USER_PROFILE,
  DELETE_USER_PROFILE,
  DELETE_USER_PROFILE_SUCCESS,
  DELETE_USER_PROFILE_ERROR,
} from 'src/actions/user';

export const initialState = {

  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
  userId: 55,
  isLogged: true,
  isReadOnly: true,
  isGuest: false,
  isSamePassword: false,
  submitError: false,
  isLoading: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
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
        isLoading: true,
      };
    case SUBMIT_REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userName: action.name,
        userEmail: action.email,
        userPassword: '',
        userConfirmPassword: '',
        isGuest: false,
        isSamePassword: false,
        submitError: false,
        isLoading: false,
      };
    case SUBMIT_REGISTER_ERROR:
      return {
        ...state,
        submitError: true,
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

    case SAVE_USER_PROFILE:
      return {
        userName: action.name,
        userEmail: action.email,
        ...state,
      };

    case DELETE_USER_PROFILE:
      return {
        ...state,
      };
    case DELETE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLogged: false,
      };

    case DELETE_USER_PROFILE_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default reducer;
