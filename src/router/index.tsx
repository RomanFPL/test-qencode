import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/Login/index";
import ForgotPassword from "../components/auth/ForgotPassword";
import ResetPassword from "../components/auth/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <UnprotectedRoute>
        <Login />
      </UnprotectedRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <UnprotectedRoute>
        <ForgotPassword />
      </UnprotectedRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <UnprotectedRoute>
        <ResetPassword />
      </UnprotectedRoute>
    ),
  },
]);

export default router;
