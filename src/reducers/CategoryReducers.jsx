import { actions } from "../actions";
const initalState = {
  categorys: [],
  loading: false,
  error: null,
};

const CategoryReducres = (state, action) => {
  switch (action.type) {
    case actions.category.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.category.DATA_FETCHED: {
      return {
        ...state,
        categorys: action.data,
        loading: false,
      };
    }
    case actions.category.DATA_FETCH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    case actions.category.DATA_CREATE: {
      return {
        ...state,
        loading: false,
        categorys: [...state.categorys, action.data],
      };
    }
    case actions.category.DATA_DELETED: {
      return {
        ...state,
        loading: false,
        categorys: state.categorys.filter((x) => x.id !== action.data),
      };
    }

    case actions.category.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        categorys: [...state.categorys, action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export { CategoryReducres, initalState };
