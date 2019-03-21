import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const login = (cb = () => {}, data = {}, error = () => {}) => {
  return dispatch => {
    dispatch(login_loading(true));
    axios
      .post("http://localhost:8080/login/", {
        username: data.username,
        password: data.password
      })
      .then(result => {
        let data = result.data ;
          cb(data);
          dispatch({
            type: LOGIN,
            payload: data
          });
          dispatch(login_loading(false));
      })
      .catch(error => {
        error(error);
        dispatch(login_loading(true));
        dispatch(login_faild(true));
      });
  };
};

export const login_faild = faild => {
  return {
    type: LOGIN_FAIL,
    faild: faild
  };
};

export const login_loading = loading => {
  return {
    type: LOGIN_LOADING,
    faild: loading
  };
};
