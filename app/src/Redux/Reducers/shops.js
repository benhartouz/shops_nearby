import {
  FETCH_SHOPS,
  FETCH_SHOPS_LOADING,
  FETCH_SHOPS_FAIL
} from "../Actions/shops";

let init_state_shops = {
  loading: false,
  failed: false,
  payload: []
};

export const shops = (state = init_state_shops, action) => {
  switch (action.type) {
    case FETCH_SHOPS:
      return Object.assign({}, state, {
        payload: action.payload
      });
    case FETCH_SHOPS_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case FETCH_SHOPS_FAIL:
      return Object.assign({}, state, {
        failed: action.faild
      });
    default:
      return state;
  }
};
