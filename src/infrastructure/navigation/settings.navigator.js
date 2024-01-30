import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../../features/settings/screens/settings.screen";
import { FavouriteScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: "none"}}>
      <SettingsStack.Screen name="MainSettings" component={SettingScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouriteScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen}/>
    </SettingsStack.Navigator>
  );
};
