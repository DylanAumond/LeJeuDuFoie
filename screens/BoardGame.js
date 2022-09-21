import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { GameContexts } from "../GameContext";
import { casesData } from "../assets/Casesdata";
import Case from "../components/Case";
import CaseModal from "../components/CaseModal";
import { useNavigation } from "@react-navigation/native";
import Theme from '../Theme'
import Style from '../Styles'

const BoardGame = () => {
  const navigation = useNavigation();

  // get the game's context
  const {
    players,setPlayers,  // players' list
    currentPlayer,setCurrentPlayer // current player
  }= useContext(GameContexts)

  // enable player to do action
  const [wait,setWait] = useState(false)
  

  // caseModal data
  const [caseSelected, setCaseSelected] = useState();
  // caseModal visibility
  const [isCaseModalOpen, setCaseModalOpen] = useState(false);
  // caseModal players's list
  const [playersOnCaseSelected, setPlayersOnCaseSelected] = useState([]);

  function rollDice(){
    // enable player to play until turn is ended
    setWait(true)

    // get a random number between 1 and 6
    const diceScore = Math.floor(Math.random() * 6 + 1);

    // new player's position
    const newPosition = calcPosition(
      players[currentPlayer].position,
      diceScore
    );

    // current player moves until he arrived to his new position
    const animationMoove = setInterval(() => {
      // if current player's position is lower than the new position
      if (players[currentPlayer].position < newPosition) {
        //player moves forward
        players[currentPlayer].position++;
        // refresh players' list
        return setPlayers([...players]);
      }
      // if current player's position is higher than the new position
      if (players[currentPlayer].position > newPosition) {
        //player moves forward
        players[currentPlayer].position--;
        // refresh players' list
        return setPlayers([...players]);
      }
      // clear the interval
      clearInterval(animationMoove)
      // reset the wait
      setWait(false)
      // redirect player to the instruction's page
      navigation.navigate("Insctruction", { case: casesData[newPosition] });
    }, 500);
  }

  // calculate the new players' position
  function calcPosition(position,diceScore){
    // calculate the new players' position
    let newPosition = position + diceScore
    // check if the new position is possible
    if (newPosition > casesData.length - 1) {
      // return the new position
      return position + (casesData.length - 1 - newPosition);
    }
    return newPosition;
  }

  // handle press on a case
  const onPressCaseModalHandler = (modalState, modalCase, players) => {
    // set the casModal visibility
    setCaseModalOpen(modalState);
    // set the selected case
    setCaseSelected(modalCase);
    // set the casSelected players list
    setPlayersOnCaseSelected(players);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.MAIN_BACKGROUND_COLOR }}>
        <StatusBar/>
          {/* current Player's pseudo */}
          <Text>{players[currentPlayer].pseudo}</Text>
          {/* current Player's position */}
          <Text>{players[currentPlayer].position}</Text>
          {/* game's cases */}
          <FlatList data={casesData}
           contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignContent: 'center'}}
          renderItem={({ item })=> <Case caseData={item} caseModal={onPressCaseModalHandler}/>}
          listKey={(item) => item.id}
          numColumns={6}
          />
          {/* case's modal */}
          <CaseModal case={caseSelected} isOpen={isCaseModalOpen} playersOnCase={playersOnCaseSelected}/>
          {/* button to roll the dice */}
          <Button title='roll dice' disabled={wait} onPress={()=>rollDice()}/>
    </SafeAreaView>
  );
};

export default BoardGame;
