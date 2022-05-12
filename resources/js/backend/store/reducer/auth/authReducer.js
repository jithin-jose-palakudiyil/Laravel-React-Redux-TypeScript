// @ts-ignore
import { SESSION } from "../../types";

const initialState = {
  userDetails: "",
  accessToken: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSION.SEND_LOGIN_CREDENTIALS:
      return {
        ...state,
        userDetails: action?.payload?.data,
        accessToken: action?.payload?.data?.access_token,
      };

    default:
      return state;
  }
};

export default authReducer;
