const initialState = {
  loading: false,
  user: {},
  products: [],
  cart: {},
  error:"yoyoyo"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
        };
    default: return state
  }
};

export default reducer;