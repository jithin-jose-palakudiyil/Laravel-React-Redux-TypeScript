// @ts-ignore
import appRequest from "../../utils/fetchhandler";

// @ts-ignore
import { SESSION } from "../types";

export const sendLoginCredentials = (
  values,
  successHandler,
  errorHandler 
) => {
  const fetchOptions = {
    url: `auth/login`,
    method: "POST",
    secure: false,
    body: JSON.stringify(values),
    actionType: SESSION.SEND_LOGIN_CREDENTIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
