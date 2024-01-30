import React, { useContext } from "react";
import styled from "styled-components";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utitlity/safearea.utility";
import { Text } from "react-native";
import { FlatList, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import RestaurantInfo from "../../restaurant/components/restaurant-info";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 0,
      backgroundColor: "#F1F1F1",
    }
  });

export const FavouriteScreen = ({navigation}) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant Details", { restaurant: item })
              }
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        key={(item) => item.name}
      />
    </SafeAreaView>
  ) : (
    <NoFavouritesArea>
      <Text>No Favourites Yet</Text>
    </NoFavouritesArea>
  );
};