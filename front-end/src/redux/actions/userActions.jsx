import { GET_USERPROFILE, UPDATE_USERNAME } from "./typeActions";

export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

export const updateUserName = (userName) => {
    return {
        type: UPDATE_USERNAME,
        payload: userName,
    }
}