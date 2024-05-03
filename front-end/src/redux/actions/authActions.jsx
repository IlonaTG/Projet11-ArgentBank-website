import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions/typeActions";

  export const loginSuccess = (token) => {
    return {
      type: LOGIN_SUCCESS,
      payload: token
    };
  };
  
  export const loginError = (error) => {
    return {
      type: LOGIN_ERROR,
      payload: error
    };
  };

  export const logout = () => {
    return {
        type: LOGOUT,
    }
} 