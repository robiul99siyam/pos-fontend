import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";

import CateogryAdd from "./admin/category/CateogryAdd";
import AddProdcut from "./admin/product/AddProduct";
import AdminProduct from "./admin/product/AdminProducts.jsx";
import Supplier from "./admin/supplier/Supplier";
import SupplierAdd from "./admin/supplier/SupplierAdd";
import Invoice from "./components/Bills/Invoice.jsx";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PrivateRoute />} path="/" />
        <Route element={<Admin />} path="/deshboard">
          <Route path="product">
            <Route index element={<AdminProduct />} />
            <Route element={<AddProdcut />} path="add-product" />
          </Route>
          <Route path="supplier">
            <Route index element={<Supplier />} />
            <Route element={<SupplierAdd />} path="add-supplier" />
          </Route>
          <Route element={<SupplierAdd />} path="add-supplier" />
          <Route element={<CateogryAdd />} path="add-category" />
        </Route>
        <Route element={<Invoice />} path="/Invoice" />
      </Routes>
    </>
  );
}
