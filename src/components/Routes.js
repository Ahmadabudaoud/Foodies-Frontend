import React from "react";
import { Route, Switch } from "react-router";
import CategoryDetail from "../categories/CategoryDetail";
import CategoryForm from "../forms/CategoryForm";
import IngredientForm from "../forms/IngredientForm";

import IngredientList from "../ingredients/IngredientList";
import Home from "./Home";
//components

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/categories/:categoryId/ingredients">
        <IngredientForm />
      </Route>

      <Route path="/categories/new">
        <CategoryForm />
      </Route>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/recipe/new">
        <IngredientList />
      </Route>
    </Switch>
  );
};
export default Routes;
