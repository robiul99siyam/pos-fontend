import { actions } from "../actions";
const initalState = {
  suppliers: [],
  loading: false,
  error: null,
};

const SupplierReducers = (state, action) => {
  switch (action.type) {
    case actions.supplier.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.supplier.DATA_FETCHED: {
      return {
        ...state,
        suppliers: action.data,
        loading: false,
      };
    }
    case actions.supplier.DATA_FETCH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    case actions.supplier.DATA_CREATE: {
      return {
        ...state,
        loading: false,
        suppliers: [...state.suppliers, action.data],
      };
    }
    case actions.supplier.DATA_DELETED: {
      return {
        ...state,
        loading: false,
        suppliers: state.suppliers.filter((x) => x.id !== action.data),
      };
    }

    case actions.product.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        suppliers: [...state.suppliers, action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export { initalState, SupplierReducers };
