import { actions } from "../actions";
const initalState = {
  products: [],
  loading: false,
  error: null,
};

const ProducttReducres = (state, action) => {
  switch (action.type) {
    case actions.product.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.product.DATA_FETCHED: {
      return {
        ...state,
        products: action.data,
        loading: false,
      };
    }
    case actions.product.DATA_FETCH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    case actions.product.DATA_CREATE: {
      return {
        ...state,
        loading: false,
        products: [...state.products, action.data],
      };
    }
    case actions.product.DATA_DELETED: {
      return {
        ...state,
        loading: false,
        products: state.products.filter((x) => x.id !== action.data),
      };
    }

    case actions.product.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        products: [...state.products, action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export { initalState, ProducttReducres };
