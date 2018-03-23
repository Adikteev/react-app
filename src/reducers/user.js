import { IS_LOGGED_IN, IS_LOGGED_IN_OUT } from "../constants";

const initialState = {
  id: null,
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        id: action.id
      };

    case IS_LOGGED_IN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        id: null
      };

    default:
      return state;
  }
};

export default user;
