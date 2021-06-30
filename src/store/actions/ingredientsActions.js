import axios from "axios";

import * as actionTypes from "./actionTypes";

export const addIngredient = (newIngredient, history, categoryId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const res = await axios.post(
        `http://localhost:8000/categories/${categoryId}/ingredients`,
        formData
      );
      console.log(res.data, "res");
      dispatch({
        type: actionTypes.ADD_INGREDIENT,
        payload: { newIngredient: res.data },
      });
      console.log("historyy");
      history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/ingredients");
      dispatch({
        type: actionTypes.FETCH_INGREDIENTS,
        payload: res.data,
      });
    } catch (error) {}
  };
};
