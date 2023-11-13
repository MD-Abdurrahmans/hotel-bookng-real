import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../config/firebase/firebse.config";
import axios from "axios";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext(auth);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logOut

  const logout = () => {
    return signOut(auth);
  };

  // update User Profile

  const UpdateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios.post(
          "https://server-hotel-five.vercel.app/jwt",
          { email: userEmail },
          { withCredentials: true }
        );
      } else {
        axios.post(
          "https://server-hotel-five.vercel.app/logout",
          { email: userEmail },
          { withCredentials: true }
        );
      }

      console.log("observer", currentUser);
    });

    () => {
      return unSubscribe();
    };
  }, []);

  const values = {
    user,
    loading,
    createUser,
    loginUser,
    logout,
    googleLogin,
    UpdateUserProfile,
  };

  return (
    <div>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
