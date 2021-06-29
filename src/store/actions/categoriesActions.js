import axios from "axios";

import * as actionTypes from "./actionTypes";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      console.log("ahaadd");
      const res = await axios.get("http://localhost:8000/categories");
      console.log(res.data);

      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
