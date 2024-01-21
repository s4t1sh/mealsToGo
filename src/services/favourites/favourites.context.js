import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restautant) => {
    setFavourites([...favourites, restautant]);
  };

  const remove = (restautant) => {
    const newFavourites = favourites.filter((x) => 
      x.placeId !== restautant.placeId
    );
    setFavourites(newFavourites);
  };

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (e) {
      console.log("Error Storing" ,e);
    }
  };

  const getFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites');
      return jsonValue !== null ? setFavourites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log("Error Loading" ,e);
    }
  };

  useEffect(()=>{
    getFavourites();
  },[])
  
  useEffect(()=>{
    saveFavourites(favourites)
  },[favourites])
  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
