import React from "react";
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import Players from "./screens/Players";
import BoardGame from "./screens/BoardGame";
import { GameProvider } from "./GameContext";
import Insctruction from "./screens/Insctruction";

const Stack = createNativeStackNavigator()

const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  </GameProvider>
  );
}

export default App;
