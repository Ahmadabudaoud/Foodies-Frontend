import { useSelector } from "react-redux";
import { store } from "../store";
import { fetchIngredients } from "../store/actions/ingredientsActions";
import { ListWrapper } from "../styles";
import IngredientCard from "./IngredientCard";

const IngredientList = () => {
  store.dispatch(fetchIngredients());

  const ingredients = useSelector(
    (state) => state.ingredientsReducer.ingredients
  );
  const ingredientsList = ingredients.map((ingredient) => (
    <IngredientCard ingredient={ingredient} />
  ));
  return <ListWrapper>{ingredientsList}</ListWrapper>;
};

export default IngredientList;
