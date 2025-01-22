import { useContext } from "react";
import { Suppliercontext } from "../context";

export function useSupplier() {
  return useContext(Suppliercontext);
}
