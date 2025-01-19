import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PrivateRoute />} path="/" />
      </Routes>
    </>
  );
}
