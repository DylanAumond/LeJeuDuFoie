import React, { useContext } from 'react'
import { Button, SafeAreaView, StatusBar, Text } from 'react-native'
import { playerAction } from '../actions/player'
import { GameContexts } from '../GameContext'

const Insctruction = ({ route, navigation }) => {
    // get the rule from the navigation's params
    const {rule} = route.params.case
    // get the game's context
  const {
    players,setPlayers,  // players' list
    currentPlayer,setCurrentPlayer // current player
  }= useContext(GameContexts)
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar/>
        <Text>{rule}</Text>
        <Button title="Play" onPress={() => {
          // if different from replay
          if(rule != 'Relance'){ setCurrentPlayer(playerAction('next',{players, currentPlayer}))}
          navigation.navigate('BoardGame');
          }}/>
    </SafeAreaView>
  )
}

export default Insctruction