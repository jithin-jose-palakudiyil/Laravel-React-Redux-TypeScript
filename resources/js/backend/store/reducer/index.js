import {combineReducers} from 'redux';
import { update } from "lodash";
import { COMMON } from "../types";

// @ts-ignore
import Auth from "./auth/authReducer";

//const AdminState = {  prefix: "admin" };

const allReducers = combineReducers({
  //AdminState,
  Auth 
});



const rootReducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case COMMON.RESET_FIELD:
      if (action.key) {
        newState = update(state, action.key, () => action.value);
      }
      return {
        ...newState,
      };
    default:
    // do nothing;
  }
  return allReducers(newState, action);
};

export default rootReducer;