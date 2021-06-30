import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import ingredientsReducer from "./ingredientsReducer";
import recipesReducer from "./recipesReducer";
const rootReducers = combineReducers({
  categoriesReducer,
  ingredientsReducer,
  recipesReducer,
});
export default rootReducers;
