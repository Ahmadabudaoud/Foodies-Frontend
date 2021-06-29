import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { ListWrapper } from "../styles";
const CategoryList = () => {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const categoryList = categories.map((category) => (
    <CategoryCard category={category} />
  ));
  return <ListWrapper>{categoryList}</ListWrapper>;
};
export default CategoryList;
