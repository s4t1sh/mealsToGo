import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform, View, Text } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const Title = styled.Text`
    font-weight: bold;
    text-align: center;
`

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isFavouriteContent }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      {isFavouriteContent ? <CompactImage source={{ uri: restaurant.photos[0] }}/> : ''}
      <Image source={{ uri: restaurant.photos[0] }}/>
      <Title center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Title>
    </Item>
  );
};