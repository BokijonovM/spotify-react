import {
  SET_USER_NAME,
  SET_USER_SURNAME,
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
} from "../action";
import { initialState } from "../store";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_USER_SURNAME:
      return {
        ...state,
        surname: action.payload,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
