import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, StatusBar, Text } from "react-native"
 
const Home = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
        {/* Game's title */}
        <Text style={{fontFamily: 'Nickainley',fontSize:80,color: 'white'}}>Le jeu</Text>
        <Text style={{fontFamily: 'Nickainley',fontSize:80}}>du foie</Text>
        {/* Button Play */}
        <Button title="Play" onPress={() => navigation.navigate('Players')}/>
    </SafeAreaView>
  )
}

export default Home