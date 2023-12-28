import React, { useEffect, useMemo, createContext, useState } from "react";
import { restaurantServices, restaurantTransform } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = ()=>{
        setIsLoading(true);
        setTimeout(() => {
            restaurantServices().then(restaurantTransform).then((results)=>{
                setRestaurants(results);
                setIsLoading(false);
            }).catch((err)=>{
                setIsLoading(false)
             setError(err);   
            })
        }, 2000);
    }

    useEffect(()=>{
        retrieveRestaurants();
    },[])
    
  return (
    <RestaurantContext.Provider value={{restaurants, error, isLoading}}>
      {children}
    </RestaurantContext.Provider>
  );
};