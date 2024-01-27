import React, { useState } from "react";
import { SafeArea } from "../../../components/utitlity/safearea.utility";
import RestaurantInfo from "../components/restaurant-info";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";


const RestaurantDetails = ({route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const handleBreakfast = () => setBreakfastExpanded(!breakfastExpanded);
  const handleLunch = () => setLunchExpanded(!lunchExpanded);
  const handleDinner = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinks = () => setDrinksExpanded(!drinksExpanded);

  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfo restaurant={restaurant} />
        <List.Section>
          <List.Accordion
            title="BreakFast"
            left={(props) => <List.Icon {...props} icon="bread-slice"/>}
            expanded={breakfastExpanded}
            onPress={handleBreakfast}
            style={{backgroundColor: `#F1F1F1`}}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={handleLunch}
            style={{backgroundColor: `#F1F1F1`}}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food" />}
            expanded={dinnerExpanded}
            onPress={handleDinner}
            style={{backgroundColor: `#F1F1F1`}}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={handleDrinks}
            style={{backgroundColor: `#F1F1F1`}}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetails;
