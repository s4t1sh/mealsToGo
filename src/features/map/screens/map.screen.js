import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import Search from "../components/map.search";

const Map = styled(MapView)`
  height: 100%;
`;

const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};

export default MapScreen;
