import { useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";
import { ListWrapper } from "../styles";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const recipeList = recipes.map((recipe) => <RecipeCard recipe={recipe} />);
  return <ListWrapper>{recipeList}</ListWrapper>;
};
export default RecipeList;
