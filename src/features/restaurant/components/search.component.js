import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 0,
  },
});

const Search = ({isFavouiteToggled, onFavouriteToggle}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <Searchbar
      placeholder="Search for places"
      icon={isFavouiteToggled ? 'heart' : 'heart-outline'}
      onIconPress={onFavouriteToggle}
      value={keyword}
      style={styles.searchBar}
      elevation={3}
      onSubmitEditing={()=>{
        search(searchKeyword)
      }}

      onChangeText={(text)=>{
        if(!text.length){
            return;
        }
        setSearchKeyword(text);
      }}
    />
  );
};

export default Search;
