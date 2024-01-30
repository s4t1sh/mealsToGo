import React, { useState, createContext, useEffect } from "react";
import loginRequest from "./authentication.service";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = async (email, password)=>{
    setIsLoading(true);
    setError(null);
    if(email === "v@satish.io" && password === "satish123"){
      setTimeout(() => {
        setUser(email);
        setIsAuthenticated(true);
        setIsLoading(false);
      }, 2000);

      try {
        await AsyncStorage.setItem('@auth', JSON.stringify(isAuthenticated));
      } catch (e) {
        console.log("Error Storing" ,e);
      }
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

  const onLogout = async()=>{
    try {
      await AsyncStorage.removeItem('@auth');
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  }

  const getAuthenticatedInfo = async ()=>{
    try {
      const val = await AsyncStorage.getItem('@auth');
      setUser("v@satish.io");
      return val !== null ? setIsAuthenticated(JSON.stringify(val)) : null;
    } catch (e) {
      console.log("Error Loading" ,e);
    }
  };

  useEffect(()=>{
    getAuthenticatedInfo();
  },[])

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        error,
        isLoading,
        onLogin,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
