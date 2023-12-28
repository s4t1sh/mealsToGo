import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurant/screens/restaurant.screen";
import RestaurantDetails from "../../features/restaurant/screens/restaurant-detail.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="Restaurant Details"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
