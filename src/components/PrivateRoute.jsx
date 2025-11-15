import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  return savedUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
