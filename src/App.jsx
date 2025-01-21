import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import AddProduct from "./admin/product/AddProduct";

import CateogryAdd from "./admin/category/CateogryAdd";
import Supplier from "./admin/supplier/Supplier";
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
          <Route element={<Supplier />} path="supplier" />
          <Route element={<CateogryAdd />} path="add-category" />
        </Route>
      </Routes>
    </>
  );
}
