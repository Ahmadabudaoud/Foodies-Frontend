import { addCategory } from "../store/actions/categoriesActions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
const CategoryForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });
  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category));
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={category.name}
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
export default CategoryForm;
