import {
  SIGN_IN_ERROR,
  SIGN_IN_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_LOADING,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_LOADING,
} from "./authActionType";

export const signInLoadingAction = () => ({ type: SIGN_IN_LOADING });
export const signInSuccessAction = (payload) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});
export const signInErrorAction = (error) => ({ type: SIGN_IN_ERROR, error });

export const signOutLoadingAction = () => ({ type: SIGN_OUT_LOADING });
export const signOutSuccessAction = () => ({ type: SIGN_OUT_SUCCESS });
export const signOutErrorAction = () => ({ type: SIGN_OUT_ERROR });

export const signUpLoadingAction = () => ({ type: SIGN_UP_LOADING });
export const signUpSuccessAction = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});
export const signUpErrorAction = (error) => ({ type: SIGN_UP_ERROR, error });
