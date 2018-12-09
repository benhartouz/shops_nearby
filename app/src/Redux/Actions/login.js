import axios from 'axios';
export const LOGIN = "LOGIN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const login = () => {
    return (dispatch) => {
        axios.get('login').then((result)=>{
            console.log(result);
            dispatch({
                type : LOGIN , 
                payload : result
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export const login_faild =  (faild) => {
    return{
        type : LOGIN_FAIL ,
        faild : faild
    }
}

export const login_loading =  (loading) => {
    return{
        type : LOGIN_LOADING ,
        faild : loading
    }
}