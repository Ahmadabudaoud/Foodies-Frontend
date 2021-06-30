import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case actionTypes.ADD_CATEGORY:
      const { newCategory } = action.payload;

      return {
        ...state,
        categories: [...state.categories, newCategory],
      };

    case actionTypes.ADD_INGREDIENT:
      const { newIngredient } = action.payload;
      console.log(newIngredient, "reducer");
      const foundCategory = state.categories.find(
        (catogry) => catogry.id === newIngredient.categoryId
      );
      if (foundCategory.ingredients) {
        foundCategory.ingredients.push(newIngredient);
      } else {
        foundCategory.ingredients = [];
        foundCategory.ingredients.push(newIngredient);
      }

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
