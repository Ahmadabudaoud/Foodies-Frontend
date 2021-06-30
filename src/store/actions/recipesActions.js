import axios from "axios";

import * as actionTypes from "./actionTypes";

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/recipes");

      dispatch({
        type: actionTypes.FETCH_RECIPES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
