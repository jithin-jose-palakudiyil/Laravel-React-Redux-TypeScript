import axios from "axios";
import Cookies from 'js-cookie'

//const serverAPIUrl = process.env.MIX_REACT_APP_URL;
const serverAPIUrl ='http://127.0.0.1:8000/api/';

const appRequest = ( { url, method = "GET", actionType, body, secure = false, fileUpload = false }, successHandler = null, errorHandler = null ) => 
{

  const authToken = Cookies.get('authToken'); // get authToken from cookies 

  return (dispatch) => {

    const triggerSuccessHandler = (response) => {
      /* Redux Calling */
      dispatch({
        type: actionType,
        payload: response,
      });
      /* response for success */
      return successHandler ? successHandler(response) : null;
    };

    /* Set Headers */
    const headersData = {
      Accept: fileUpload ? "multipart/form-data" : "application/json",
      "Content-Type": fileUpload ? "multipart/form-data" : "application/json",
    };

    let requestBody = body;
    if (method === "POST" && body !== "" && !fileUpload) {
      requestBody = JSON.stringify({
        ...JSON.parse(body),
      });
    }
    /* Retun axios response */
    return axios({
      method: method,
      url: `${serverAPIUrl}${url}`,
      headers: {
        ...headersData,
        ...(secure && {
          /* Set Bearer Token */
          Authorization: `Bearer ${authToken.replace(/['"]+/g, "")}`,
        }),
        "Access-Control-Allow-Origin": "*",
      },
      ...(method !== "GET" && { data: requestBody }),
    })
      .then((res) => {
        /* axios success response */
        return triggerSuccessHandler(res);
      })
      .catch((err) => {
        const errorObj = {
          /* axios error response */
          error: {
            url: `${serverAPIUrl}${url}`,
            code: "FETCH_FAILED",
            message: err,
          },
        };
        return errorHandler ? errorHandler(errorObj) : null;
      });
  };












  
};
export default appRequest;
