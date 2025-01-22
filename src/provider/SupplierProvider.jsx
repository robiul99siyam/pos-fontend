import React, { useReducer } from "react";
import { Suppliercontext } from "../context";
import { initalState, SupplierReducers } from "../reducers/SupplierReducers";

export function SupplierProvider({ children }) {
  const [state, dispatch] = useReducer(SupplierReducers, initalState);
  return (
    <Suppliercontext.Provider value={{ state, dispatch }}>
      {children}
    </Suppliercontext.Provider>
  );
}
