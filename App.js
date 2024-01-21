import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RestaurantContextProvider } from "./src/services/restaurant/restautant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { initializeApp, getApps } from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyD-v1R5tgYYTKz2WdyBfC65p0IAAsFyNEY",
  authDomain: "mealstogo-b2c3c.firebaseapp.com",
  projectId: "mealstogo-b2c3c",
  storageBucket: "mealstogo-b2c3c.appspot.com",
  messagingSenderId: "343275877095",
  appId: "1:343275877095:web:434d59000fda4ea2f36842",
};

if (!getApps.length) {
  const FIREBASE_APP = initializeApp(firebaseConfig);
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await auth()
        .signInWithEmailAndPassword("v@satish.io", "satish123")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
