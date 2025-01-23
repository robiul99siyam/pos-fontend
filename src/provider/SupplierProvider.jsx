import React, { useReducer } from "react";
import { Suppliercontext } from "../context";
import { initalState, SupplierReducers } from "../reducers/SupplierReducers";

export function SupplierProvider({ children }) {
  const [supplierState, dispatch] = useReducer(SupplierReducers, initalState);
  return (
    <Suppliercontext.Provider value={{ supplierState, dispatch }}>
      {children}
    </Suppliercontext.Provider>
  );
}
