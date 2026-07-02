import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Spinner } from './ui/Spinner';

/**
 * Wraps admin routes. Redirects to /osi-console/login if not authenticated.
 * Optionally restricts to specific roles.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string[]} [props.allowedRoles] - if provided, redirects if role not in list
 */
export function ProtectedRoute({ children, allowedRoles }) {
  const { user, role, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="admin-page-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/osi-console/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/osi-console/dashboard" replace />;
  }

  return children;
}
