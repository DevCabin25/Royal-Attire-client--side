import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";

export const Authcontext = createContext();
import React from "react";
import auth from "../Firebace/Firebace.init";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const provider = new GoogleAuthProvider();
  const googleusers = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    loading,
    googleusers,
  };
  return (
    <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
