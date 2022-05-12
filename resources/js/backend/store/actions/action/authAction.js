import appRequest from "../../../utils/fetchhandler";
import { SESSION } from "../../types";

export const sendLoginCredentials = (
  values,
  successHandler,
  errorHandler
) => {
  const fetchOptions = {
    url: `api/b/v1/auth/login`,
    method: "POST",
    secure: false,
    body: JSON.stringify(values),
    actionType: SESSION.SEND_LOGIN_CREDENTIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
