import React, { useReducer } from "react";
import { ProductContext } from "../context";

import { initalState, ProducttReducres } from "../reducers/ProductReducers";

export default function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(ProducttReducres, initalState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
