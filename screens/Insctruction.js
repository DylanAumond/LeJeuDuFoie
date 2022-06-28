import React from 'react'
import { Button, SafeAreaView, StatusBar, Text } from 'react-native'

const Insctruction = ({ route, navigation }) => {
    // get the rule from the navigation's params
    const {rule} = route.params.case
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar/>
        <Text>{rule}</Text>
        <Button title="Play" onPress={() => navigation.navigate('BoardGame')}/>
    </SafeAreaView>
  )
}

export default Insctruction