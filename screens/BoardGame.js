import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { GameContexts } from "../GameContext";
import Logo from "../components/Logo";
import { casesData } from "../assets/Casesdata";
import Case from "../components/Case";
import CaseModal from "../components/CaseModal";
import { useNavigation } from "@react-navigation/native";
import Theme from "../Theme";
import Styles from "../Styles";
import dices from "../assets/images/dices.png";

const BoardGame = () => {
  const navigation = useNavigation();

  // get the game's context
  const {
    players,
    setPlayers, // players' list
    currentPlayer,
    setCurrentPlayer, // current player
  } = useContext(GameContexts);

  // enable player to do action
  const [wait, setWait] = useState(false);

  // caseModal data
  const [caseSelected, setCaseSelected] = useState();
  // caseModal visibility
  const [isCaseModalOpen, setCaseModalOpen] = useState(false);
  // caseModal players's list
  const [playersOnCaseSelected, setPlayersOnCaseSelected] = useState([]);

  function rollDice() {
    // enable player to play until turn is ended
    setWait(true);

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
      clearInterval(animationMoove);
      // reset the wait
      setWait(false);

      // if player is on win case
      if (newPosition === casesData.length - 1) {
        // redirect player to the win screen
        return navigation.navigate("Win", { player: players[currentPlayer] });
      }

      // redirect player to the instruction's page
      navigation.navigate("Insctruction", { case: casesData[newPosition] });
    }, 500);
  }

  // calculate the new players' position
  function calcPosition(position, diceScore) {
    // calculate the new players' position
    let newPosition = position + diceScore;
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
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: Theme.MAIN_BACKGROUND_COLOR,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <StatusBar />

      {/*  game logo */}
      <Logo size={"sm"} />

      {/* current Player's pseudo */}
      <Text style={{ fontSize: 25, color: Theme.TEXT_MAIN_COLOR }}>
        Player: {players[currentPlayer].pseudo}
      </Text>

      {/* game's cases */}
      <FlatList
        data={casesData}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
        renderItem={({ item }) => (
          <Case caseData={item} caseModal={onPressCaseModalHandler} />
        )}
        listKey={item => item.id}
        numColumns={6}
      />

      {/* case's modal */}
      <CaseModal
        case={caseSelected}
        isOpen={isCaseModalOpen}
        playersOnCase={playersOnCaseSelected}
      />

      {/* button to roll the dice */}
      <TouchableOpacity
        style={[style.diceBtn, Styles.roundedFull]}
        disabled={wait}
        onPress={() => rollDice()}
      >
        <ImageBackground
          source={dices}
          resizeMode="contain"
          style={{ flex: 1, justifyContent: "center" }}
          tintColor="white"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  diceBtn: {
    borderWidth: 3,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
    padding: "3%",
    margin: "0.8%",
    width: "20%",
    height: undefined,
    aspectRatio: 1 / 1,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  },
});

export default BoardGame;
