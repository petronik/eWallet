import { useLocation, Navigate, Outlet} from "react-router-dom";


const RequireAuth = () => {
  const location = useLocation();

  return (
    localStorage.getItem('token')
        ? <Outlet />
        : <Navigate to='/' state={{ from: location}} replace />
  );
}
export default RequireAuth;
