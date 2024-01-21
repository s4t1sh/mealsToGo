import React, { useContext } from "react";
import AppNavigator from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native"
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AccountNavigator/>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
