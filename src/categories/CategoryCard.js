import { Link } from "react-router-dom";
import { ProductWrapper, CardImage } from "../styles";
const CategoryCard = ({ category }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/categories/${category.slug}`}>
        <CardImage alt={category.name} src={category.image} />
      </Link>
      <p>{category.name}</p>
    </ProductWrapper>
  );
};
export default CategoryCard;
