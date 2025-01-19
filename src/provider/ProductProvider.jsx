import React, { useState } from "react";
import { ProductContext } from "../context";

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
