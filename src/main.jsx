import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./provider/AuthProvider.jsx";
import CategroyProvider from "./provider/CategroyProvider.jsx";
import ProductProvider from "./provider/ProductProvider.jsx";
import { SupplierProvider } from "./provider/SupplierProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CategroyProvider>
        <ProductProvider>
          <SupplierProvider>
            <Router>
              <App />
            </Router>
          </SupplierProvider>
        </ProductProvider>
      </CategroyProvider>
    </AuthProvider>
  </StrictMode>
);
