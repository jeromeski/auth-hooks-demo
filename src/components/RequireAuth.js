import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLogger } from "react-use";
import { useAuth } from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  useLogger("RequireAuth -->");
  console.log(auth);

  const location = useLocation();

  return auth?.user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    // A component that renders the next match in a set of matches.
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
