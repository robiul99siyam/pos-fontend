import React, { useState } from "react";
import { CategoryContext } from "../context";
export default function CategroyProvider({ children }) {
  const [category, setCategory] = useState([]);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
