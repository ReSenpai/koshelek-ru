import { AppStateType } from "./store";
import { ThunkAction } from "redux-thunk";
import { binanceAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
    initially: true as boolean
};
export type InitialStateType = typeof initialState;

const exchangeReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }  
}

// type ActionsTypes = SetAuthUserDataActionType | SetCaptchaActionType;

// type SetAuthUserDataActionPayloadType = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
// }
// type SetAuthUserDataActionType = {
//     type: typeof SET_USER_DATA
//     payload: SetAuthUserDataActionPayloadType
// }
// export const setAuthUserData = ( 
//     userId: number | null, email: string | null, login: string | null, isAuth: boolean 
// ): SetAuthUserDataActionType => ({ 
//     type: SET_USER_DATA, 
//     payload: { userId, email, login, isAuth } 
// });

// type SetCaptchaActionType = {
//     type: typeof SET_CAPTCHA
//     captcha: string
// }
// export const setCaptcha = (captcha: string): SetCaptchaActionType => ({ type: SET_CAPTCHA, captcha});


// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;


export const testAPI = () => async (dispatch: any) => {
    const response = await binanceAPI.ping();
    console.log(response);
}



export default exchangeReducer;