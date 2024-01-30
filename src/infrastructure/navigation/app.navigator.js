import React from "react";;
import { Ionicons, Entypo } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Text } from "react-native-paper";
import {SafeArea} from "../../components/utitlity/safearea.utility"
import {RestaurantNavigator} from "./restaurant.navigator";
import {MapScreen} from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createMaterialBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const AppNavigator = () => {
  return (

      <Tab.Navigator
        activeColor="tomato"
        inactiveColor="gray"
        barStyle={{ backgroundColor: "white", paddingTop: 0 }}
      >
        <Tab.Screen
          name="Restaurants"
          component={RestaurantNavigator}
          options={{
            tabBarLabel: "Restaurants",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="md-restaurant"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="map"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsNavigator}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            ),
          }}
        />

      </Tab.Navigator>

  );
};

export default AppNavigator;
