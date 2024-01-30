import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";

import RestaurantInfo from "../components/restaurant-info";
import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantContext } from "../../../services/restaurant/restautant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import Search from "../components/search.component";
import FavoutiteBar from "../../../components/favourites/favourite-bar.component";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#F1F1F1",
  }
});

const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const RestaurantScreen = ({ navigation }) => {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);
  const {favourites}  = useContext(FavouritesContext);
  const [isFavouiteToggled, setIsFavouiteToggled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      

      <Search isFavouiteToggled= {isFavouiteToggled} onFavouriteToggle = {()=> setIsFavouiteToggled(!isFavouiteToggled)}/>
      {isLoading && (
        <Loading animating={true} color={"#ff3647"} size={"large"} />
      )}

      {isFavouiteToggled && <FavoutiteBar favourites={favourites} onNavigate={navigation.navigate}/>}
      <FadeInView>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('Restaurant Details', {restaurant: item})}>
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        key={(item) => item.name}
      />
      </FadeInView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
