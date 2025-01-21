import React, { useReducer } from "react";
import { CategoryContext } from "../context";
import { CategoryReducres, initalState } from "../reducers/CategoryReducers";
export default function CategroyProvider({ children }) {
  const [state, dispatch] = useReducer(CategoryReducres, initalState);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
}
