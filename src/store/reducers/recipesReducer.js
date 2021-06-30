import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
