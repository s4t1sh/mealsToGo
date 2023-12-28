import React, { useEffect, createContext, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    
  if (!keyword.length) {
    return;
  }

  locationRequest(keyword.toLowerCase().trim())
    .then(locationTransform)
    .then((results) => {
      setLocation(results);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err);
    });
}, [keyword]);

  return (
    <LocationContext.Provider
      value={{ location, error, isLoading, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
