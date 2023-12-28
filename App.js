import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RestaurantContextProvider } from "./src/services/restaurant/restautant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation/>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
