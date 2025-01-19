import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PrivateRoute />} path="/" />
        <Route element={<Admin />} path="/deshboard" />
      </Routes>
    </>
  );
}
