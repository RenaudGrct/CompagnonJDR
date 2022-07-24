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
    case SUBMIT_REGISTER_SUCESS:
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
    default:
      return state;
  }
};
export default reducer;
