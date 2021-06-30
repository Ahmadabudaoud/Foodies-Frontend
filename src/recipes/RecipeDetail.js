import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper } from "../styles";
import { Link } from "react-router-dom";
import IngredientCard from "../ingredients/IngredientCard";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const recipe = recipes?.find((recipe) => recipe.slug === recipeSlug);
  const ingredientsList = recipe?.ingredients?.map((ingredient) => (
    <IngredientCard ingredient={ingredient} />
  ));
  if (!recipe) return <Redirect to="/" />;
  return (
    <div>
      <Link to={`/recipes/${recipe.id}/ingredients`}>
        <button style={{ marginLeft: "15px", marginTop: "5px" }}>+</button>
      </Link>
      <h1>{recipe.name}</h1>
      <ListWrapper>{ingredientsList}</ListWrapper>
    </div>
  );
};
export default RecipeDetail;
