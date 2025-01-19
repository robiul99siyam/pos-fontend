import { useContext } from "react";
import { CategoryContext } from "../context";

export function useCategory() {
  return useContext(CategoryContext);
}
