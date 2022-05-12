import appRequest from "../../../utils/fetchhandler";
import { SESSION } from "../../types";
// @ts-check
export const sendLoginCredentials = (
  values: any,
  successHandler: any,
  errorHandler: any
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
