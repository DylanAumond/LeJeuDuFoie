import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GameProvider } from "./GameContext";
import { useFonts } from 'expo-font';

// Screens
import Home from './screens/Home'
import Players from "./screens/Players";
import BoardGame from "./screens/BoardGame";
import Insctruction from "./screens/Insctruction";
import Win from "./screens/Win";
import { Alert, BackHandler } from "react-native";


const Stack = createNativeStackNavigator()

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Attention", "Etes vous sure de quitter l'application ?", [
        {
          text: "Non",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Oui", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const [loaded] = useFonts({
    Nickainley: require('./assets/fonts/Nickainley-Normal.otf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
  <GameProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="BoardGame" component={BoardGame}/>
        <Stack.Screen name="Insctruction" component={Insctruction}/>
        <Stack.Screen name="Win" component={Win} />

      </Stack.Navigator>
    </NavigationContainer>
  </GameProvider>
  )
}

