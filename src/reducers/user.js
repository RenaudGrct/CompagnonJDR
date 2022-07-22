import {
  CHANGE_INPUT_FIELD,
  SUBMIT_LOGIN_SUCCESS,
  LOG_OUT,
  SUBMIT_REGISTER_SUCESS,
  TOGGLE_IS_READONLY,
} from 'src/actions/user';

export const initialState = {

  userName: '',
  userEmail: '',
  userPassword: '',
  userConfirmPassword: '',
  isLogged: false,
  isReadOnly: true,
  isGuest: true,

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
    case SUBMIT_REGISTER_SUCESS:
      return {
        ...state,
        isLogged: true,
        userName: action.name,
        userEmail: action.email,
        userPassword: '',
        userConfirmPassword: '',
        isGuest: false,
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
    default:
      return state;
  }
};
export default reducer;
