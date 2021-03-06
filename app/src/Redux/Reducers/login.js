import { LOGIN, LOGIN_FAIL, LOGIN_LOADING } from "../Actions/login";

let init_state_login= {
  loading: false,
  failed: false,
  payload: []
};

export const login = (state = init_state_login, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        payload: action.payload
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case LOGIN_LOADING:
      return Object.assign({}, state, {
        failed: action.failed
      });
    default:
      return state;
  }
};
