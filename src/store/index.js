import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../store/reducers/rootReducer";
import thunk from "redux-thunk";
import { fetchCategories } from "./actions/categoriesActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchCategories());
