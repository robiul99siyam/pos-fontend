import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import AddProduct from "./admin/product/AddProduct";

import CateogryAdd from "./admin/category/CateogryAdd";
import Supplier from "./admin/supplier/Supplier";
import SupplierAdd from "./admin/supplier/SupplierAdd";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PrivateRoute />} path="/" />
        <Route element={<Admin />} path="/deshboard">
          <Route element={<AddProduct />} path="add-product" />
          <Route path="supplier">
            <Route index element={<Supplier />} />
            <Route element={<SupplierAdd />} path="add-supplier" />
          </Route>
          <Route element={<SupplierAdd />} path="add-supplier" />
          <Route element={<CateogryAdd />} path="add-category" />
        </Route>
      </Routes>
    </>
  );
}
