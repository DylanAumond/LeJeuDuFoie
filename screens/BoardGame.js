import React, { useContext } from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { GameContexts } from '../GameContext'
import { casesData } from '../assets/Casesdata'
import Case from '../components/Case'

const BoardGame = () => {
  // get the game's context
  const {
    players,setPlayers,  // players' list
    currentPlayer,setCurrentPlayer // current player
  }= useContext(GameContexts)
  
  function rollDice(){
    // get a random number between 1 and 6
    const diceScore = Math.floor(Math.random() * (6) + 1)
    // create a mutable players' list
    const updatedPlayers = [...players]
    // update current players's position
    updatedPlayers[currentPlayer].position += diceScore
    // save the new players' position
    setPlayers(updatedPlayers)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar/>
          {/* current Player's pseudo */}
          <Text>{players[currentPlayer].pseudo}</Text>
          <Text>{players[currentPlayer].position}</Text>
          {/* game's cases */}
          <FlatList data={casesData}
          renderItem={({ item })=> <Case caseData={item}/>}/>
          {/* button to roll the dice */}
          <Button title='roll dice' onPress={()=>rollDice()}/>
    </SafeAreaView>
  )
}

export default BoardGame