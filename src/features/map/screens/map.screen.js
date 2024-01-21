import React, { useContext, useEffect, useState } from "react";
import MapView, {Marker,Callout} from "react-native-maps";
import styled from "styled-components/native";
import Search from "../components/map.search";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restautant.context";
import MapCallout from "../components/map-callout";

const Map = styled(MapView)`
  height: 100%;
`;

export const MapScreen = ({navigation}) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const { viewport, lat, lng } = location;
  const [latDelta, setLatDelta] = useState();

  useEffect(() => {
    const northeastlat = viewport.northeast.lat;
    const southwestlat = viewport.southwest.lat;

    setLatDelta(northeastlat - southwestlat);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout onPress={()=>navigation.navigate("Restaurant Details", {restaurant})}>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};


