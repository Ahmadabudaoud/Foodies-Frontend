import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
