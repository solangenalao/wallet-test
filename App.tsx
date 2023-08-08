import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AddCardScreen from "./src/screens/AddCard";
import CardsListScreen from "./src/screens/Cards";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "PT Sans": require("./assets/fonts/PTSans-Regular.ttf"),
    "PT Sans Bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "PT Sans Caption": require("./assets/fonts/PTSansCaption-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ detachPreviousScreen: true, presentation: 'transparentModal' }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCardScreen"
          component={AddCardScreen}
          options={{ 
            title: "Cadastro", 
            headerTintColor: '#12C2E9',
            headerTitleStyle: {
              fontFamily: "PT Sans Caption",
            },           
         }}
        />
        <Stack.Screen
          name="CardsListScreen"
          component={CardsListScreen}
          options={{ headerTitle: "Meus Cartões" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
