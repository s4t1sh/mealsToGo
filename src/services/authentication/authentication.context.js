import React, { useState, createContext } from "react";
import loginRequest from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password)=>{
    setIsLoading(true);
    setError(null);
    if(email === "v@satish.io" && password === "satish123"){
      setTimeout(() => {
        setIsAuthenticated(true);
        setIsLoading(false);
      }, 2000);
    }
    else{
      setIsLoading(false);
      setError("Invalid username or password");
    }
        // setIsLoading(true);
        // loginRequest(email, password).then((user)=>{
        //     setUser(user);
        //     setIsLoading(false);
        // }).catch((error)=>{
        //     setIsLoading(false);
        //     setError(error);
        // })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        error,
        isLoading,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
