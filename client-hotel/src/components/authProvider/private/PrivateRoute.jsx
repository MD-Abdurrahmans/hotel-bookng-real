import { Navigate } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen absolute w-full h-full">
        <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-green-500 "></div>
        <h2 className="text-3xl font-black text-green-500 pl-2">LOADING</h2>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
