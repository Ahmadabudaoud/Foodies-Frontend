import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../store/reducers/rootReducer";
import thunk from "redux-thunk";
import { fetchCategories } from "./actions/categoriesActions";
import { fetchIngredients } from "./actions/ingredientsActions";
import { fetchRecipes } from "./actions/recipesActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchCategories());
store.dispatch(fetchRecipes());
