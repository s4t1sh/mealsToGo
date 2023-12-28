import RestaurantScreen from "./src/features/restaurant/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/index";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeArea } from "./src/components/utitlity/safearea.utility";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurant/restautant.context";

const Tab = createMaterialBottomTabNavigator();
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator activeColor="tomato" inactiveColor="gray" barStyle = {{backgroundColor: "white"}}>
              <Tab.Screen
                name="Restaurants"
                component={RestaurantScreen}
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
                component={Map}
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
                component={Settings}
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
          </NavigationContainer>
        </RestaurantContextProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
