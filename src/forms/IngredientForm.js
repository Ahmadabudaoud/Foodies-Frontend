import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addIngredient } from "../store/actions/ingredientsActions";

const IngredientForm = () => {
  const { categoryId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [ingredient, setIngredient] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  const handleImage = (event) =>
    setIngredient({
      ...ingredient,
      image: event.target.files[0],
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIngredient(ingredient, history, categoryId));
  };
  console.log(ingredient);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={ingredient.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div>
        <input required type="file" onChange={handleImage} name="image" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IngredientForm;
