import React from "react";
import { Text, View} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Favourite from "../../../components/favourites/favourite.component";

const Title = styled.Text`
    margin-top: ${(props) => props.theme.space[2]};
    font-size: ${(props) => props.theme.fontSizes.title};
`;

const CardContainer = styled(Card)`
    margin-top: ${(props) => props.theme.space[3]};
`;

const Row = styled.View`
    padding-top: ${(props) => props.theme.space[1]};
    padding-bottom: ${(props) => props.theme.space[1]};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Rating = styled.View`
    flex-direction: row;
`;

const Closed = styled.Text`
    color: ${(props) => props.theme.colors.text.error};
    font-weight: bold;
`

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos,
    address = "In some street",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer >
      <Card theme={{ colors: { elevation: {  level1: 'white' }}}} style={{borderRadius: 3}}>
        <Favourite restaurant={restaurant}/>
        <Card.Cover source={{ uri: photos[0] }} style={{borderRadius: 3}}/>
        <Card.Content>
          <Title variant="titleLarge">{name}</Title>
          <Row>
          <Rating>
          {ratingArray.map((_,id)=>{
            return <SvgXml key={id} xml={star} width={20} height={20}/>
          })}
          </Rating>
          {isClosedTemporarily && <Closed>CLOSED TEMPORARILY</Closed>}
          {isOpenNow && <Rating><SvgXml xml={open} width={20} height={20}/></Rating>}
          <Icon source={{ uri: icon }} />
          </Row>
          <Text variant="bodyMedium">{address}</Text>
        </Card.Content>
      </Card>
    </CardContainer>
  );
};

export default RestaurantInfo;