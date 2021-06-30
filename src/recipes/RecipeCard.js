import { Link } from "react-router-dom";
import { ProductWrapper, CardImage } from "../styles";
const RecipeCard = ({ recipe }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/recipes/${recipe.slug}`}>
        <CardImage alt={recipe.name} src={recipe.image} />
      </Link>
      <p>{recipe.name}</p>
    </ProductWrapper>
  );
};
export default RecipeCard;
