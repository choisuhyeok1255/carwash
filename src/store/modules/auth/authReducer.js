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

const initialState = {
  loading: false,
  // currentUser에는 firebase에서 받아온 객체가 저장 될 예정, 이것을 보고 로그인이 됐는지 안됐는지 판단
  currentUser: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SIGN_IN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
    case SIGN_OUT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_OUT_SUCCESS:
      return initialState;
    case SIGN_OUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
};

export default authReducer;
