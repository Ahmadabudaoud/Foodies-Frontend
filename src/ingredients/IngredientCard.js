import { useState } from "react";
import { CardImage, IngredientHome, ProductWrapper } from "../styles";

const IngredientCard = ({ ingredient }) => {
  const [selected, setSelected] = useState(false);
  console.log(selected, "selected");
  return (
    <IngredientHome>
      <ProductWrapper
        onClick={() => (selected ? setSelected(false) : setSelected(true))}
        selected={selected}
        style={{ height: "180px", width: "150px" }}
      >
        <CardImage src={ingredient.image} alt={ingredient.name} />
        <p>{ingredient.name}</p>
      </ProductWrapper>
    </IngredientHome>
  );
};

export default IngredientCard;
