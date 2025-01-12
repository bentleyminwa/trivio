import { Navigate } from "react-router-dom";
import { useAuth } from "../Features/Auth/Hooks/useAuth";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth();

  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ credentials: [] }} replace={true} />
  );
};

export default PrivateRoute;
