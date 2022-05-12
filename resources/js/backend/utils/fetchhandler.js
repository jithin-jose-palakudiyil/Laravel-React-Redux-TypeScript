import axios from "axios";
 
//const serverAPIUrl = process.env.MIX_REACT_APP_URL;
const serverAPIUrl ='http://127.0.0.1:8000/api/';

const appRequest = (
  {
    url,
    method = "GET",
    actionType,
    body,
    secure = false,
    fileUpload = false,
  },
  successHandler = null,
  errorHandler = null
) => 
{
  const authToken = sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

   
 
  return (dispatch) => {
    const triggerSuccessHandler = (response) => {
      dispatch({
        type: actionType,
        payload: response,
      });
 
      return successHandler ? successHandler(response) : null;
    };


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
     
    return axios({
      method: method,
      url: `${serverAPIUrl}${url}`,
      headers: {
        ...headersData,
        ...(secure && {
          Authorization: `Bearer ${authToken.replace(/['"]+/g, "")}`,
        }),
        "Access-Control-Allow-Origin": "*",
      },
      ...(method !== "GET" && { data: requestBody }),
    })
      .then((res) => {
        return triggerSuccessHandler(res);
      })
      .catch((err) => {
        const errorObj = {
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
