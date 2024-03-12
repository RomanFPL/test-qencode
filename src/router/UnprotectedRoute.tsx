import { Navigate } from "react-router-dom";
import { useAppContext } from "../contexts/context";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const UnprotectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthorized } = useAppContext();

  if (isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default UnprotectedRoute;
