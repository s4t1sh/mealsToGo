import React, { useEffect, useMemo, createContext, useState, useContext } from "react";
import { restaurantServices, restaurantTransform } from "./restaurant.service";
import { LocationContext } from "../location/location.context";


export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const {location} = useContext(LocationContext)
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = (loc)=>{
        setIsLoading(true);
        setRestaurants([])
        setTimeout(() => {
            restaurantServices(loc).then(restaurantTransform).then((results)=>{
                setRestaurants(results);
                setIsLoading(false);
            }).catch((err)=>{
                setIsLoading(false)
             setError(err);   
            })
        }, 2000);
    }

    useEffect(()=>{
      if(location){
        const locationString = `${location.lat},${location.lng}`;
        retrieveRestaurants(locationString);
      }
    },[location])
    
  return (
    <RestaurantContext.Provider value={{restaurants, error, isLoading}}>
      {children}
    </RestaurantContext.Provider>
  );
};