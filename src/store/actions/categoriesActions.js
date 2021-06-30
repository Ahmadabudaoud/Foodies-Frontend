import axios from "axios";

import * as actionTypes from "./actionTypes";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      console.log("ahaadd");
      const res = await axios.get("http://localhost:8000/categories");

      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addCategory = (newCategory) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await axios.post(
        `http://localhost:8000/categories`,
        formData
      );
      console.log(res.data, "ress");

      dispatch({
        type: actionTypes.ADD_CATEGORY,
        payload: { newCategory: res.data },
      });
    } catch (error) {}
  };
};
