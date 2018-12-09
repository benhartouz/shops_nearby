import axios from "axios";
export const FETCH_SHOPS = "FETCH_SHOPS";
export const FETCH_SHOPS_FAIL = "FETCH_SHOPS_FAIL";
export const FETCH_SHOPS_LOADING = "FETCH_SHOPS_LOADING";

export const getshops = (cb = {}) => {
  return dispatch => {
    shopsLoading(true);
    axios
      .get("http://localhost:8080/shops/")
      .then(result => {
        shopsLoading(false);
        dispatch({
          type: FETCH_SHOPS,
          payload: result.data
        });
      })
      .catch(error => {
        shopsLoading(false);
        shopsFaild(true);
        console.log(error);
      });
  };
};

export const shopsLoading = loading => {
  return {
    type: FETCH_SHOPS_LOADING,
    loading: FETCH_SHOPS_LOADING
  };
};

export const shopsFaild = faild => {
  return {
    type: FETCH_SHOPS_LOADING,
    faild: faild
  };
};
