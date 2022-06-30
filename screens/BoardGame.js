import React, { useContext, useState } from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { GameContexts } from '../GameContext'
import { casesData } from '../assets/Casesdata'
import Case from '../components/Case'
import CaseModal from '../components/CaseModal'
import { useNavigation } from '@react-navigation/native'

const BoardGame = () => {
  const navigation = useNavigation();
  // case's modal data
  const [caseSelected,setCaseSelected] = useState()
  // case's modal visibility
  const [isCaseModalOpen,setCaseModalOpen] = useState(false)
  // get the game's context
  const {
    players,setPlayers,  // players' list
    currentPlayer,setCurrentPlayer // current player
  }= useContext(GameContexts)
  
  function rollDice(){
    // get a random number between 1 and 6
    const diceScore = Math.floor(Math.random() * (6) + 1)
    // new player's position
    const newPosition = calcPosition(players[currentPlayer].position,diceScore)
    // create a mutable players' list
    const updatedPlayers = [...players]
    // update current players's position
    updatedPlayers[currentPlayer].position = newPosition
    // save the new players' position
    setPlayers(updatedPlayers)
    navigation.navigate('Insctruction',{case:casesData[newPosition]})
  }
  // caluate the new players' position
  function calcPosition(position,diceScore){
    let newPosition = position + diceScore
    // check if the new position is possible
    if(newPosition > casesData.length-1){
      // return the new position
      return position + ((casesData.length-1) - newPosition)
    }
    return newPosition
  }

  // handle press on a case
  const onPressCaseModalHandler = (modalState, modalCase,players) => {
    // set the case modal visibility
    setCaseModalOpen(modalState)
    // set the case modal data
    setCaseSelected(modalCase)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar/>
          {/* current Player's pseudo */}
          <Text>{players[currentPlayer].pseudo}</Text>
          {/* current Player's position */}
          <Text>{players[currentPlayer].position}</Text>
          {/* game's cases */}
          <FlatList data={casesData}
          renderItem={({ item })=> <Case caseData={item} caseModal={onPressCaseModalHandler}/>}
          numColumns={6}
          />
          {/* case's modal */}
          <CaseModal case={caseSelected} isOpen={isCaseModalOpen} />
          {/* play modal */}
          {/* button to roll the dice */}
          <Button title='roll dice' onPress={()=>rollDice()}/>
    </SafeAreaView>
  )
}

export default BoardGame