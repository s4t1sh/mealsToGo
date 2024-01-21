import React, { useState, createContext } from "react";
import loginRequest from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password)=>{
        setIsLoading(true);
        loginRequest(email, password).then((user)=>{
            setUser(user);
            setIsLoading(false);
        }).catch((error)=>{
            setIsLoading(false);
            setError(error);
        })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        error,
        isLoading,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
