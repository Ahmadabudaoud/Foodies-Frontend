import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ListWrapper } from "../styles";
import { Link } from "react-router-dom";
import IngredientCard from "../ingredients/IngredientCard";
const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const category = categories?.find(
    (category) => category.slug === categorySlug
  );

  const ingredientsList = category?.ingredients?.map((ingredient) => (
    <IngredientCard ingredient={ingredient} />
  ));
  console.log(category);
  console.log(ingredientsList);
  if (!category) return <Redirect to="/" />;
  return (
    <div>
      <Link to={`/categories/${category.id}/ingredients`}>
        <button style={{ marginLeft: "15px", marginTop: "5px" }}>+</button>
      </Link>
      <h1>{category.name}</h1>
      <ListWrapper>{ingredientsList}</ListWrapper>
    </div>
  );
};
export default CategoryDetail;
