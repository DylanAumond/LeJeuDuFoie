import React, { useState } from "react";
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Styles from './styles'


import Home from './screens/Home'
import Players from "./screens/Players";
import BoardGame from "./screens/BoardGame";
import { GameProvider } from "./GameContext";
import Insctruction from "./screens/Insctruction";
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator()

export default function App() {
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
        className="bgPrimary"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="BoardGame" component={BoardGame}/>
        <Stack.Screen name="Insctruction" component={Insctruction}/>
      </Stack.Navigator>
    </NavigationContainer>
  </GameProvider>
  )
}

