import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    borderRadius: 0,
    position: "absolute",
    zIndex: 999,
    top: StatusBar.currentHeight*1.5,
    marginHorizontal: 16
  },
});

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <Searchbar
      placeholder="Search for places"
      value={searchKeyword}
      style={styles.searchBar}
      elevation={3}
      icon="map"
      
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
