import { useContext } from "react";
import { authContext } from "../components/authProvider/AuthProvider";

const UseAuth = () => {
  return useContext(authContext);
};

export default UseAuth;
