import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const login = (cb = () => {}, data = {}) => {
  return dispatch => {
    axios
      .post("http://localhost:8080/login/",data)
      .then(result => {
          if(result.code === 200){
            dispatch({
                type: LOGIN,
                payload: result
            });
          }
        console.log(result);
        
      })
      .catch(error => {
        console.log(error);
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
