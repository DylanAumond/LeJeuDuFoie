import React, { useContext, useEffect } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { GameContexts } from "../GameContext";
import PlayerPawn from "./PlayerPawn";

const Case = ({ caseData, caseModal }) => {
  // get the game context
  const {
    players,
    setPlayers, // players' list
    currentPlayer,
    setCurrentPlayer, // current player
  } = useContext(GameContexts);

  // return a list of players that are currently on this case
  const playersOnCase = players.filter(p => p.position === caseData.id);
  return (
    <TouchableOpacity
      onPressIn={() => caseModal(true, caseData, playersOnCase)}
      onPressOut={() => caseModal(false, caseData, playersOnCase)}
      style={{
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        flex: 1,
        padding: 10,
        height: 80,
      }}
    >
      {/* case's image */}
      <ImageBackground
        source={caseData.image}
        resizeMode="contain"
        style={{flex:1, justifyContent: "center"}}
      >
        {/* players who are on the case */}
        <FlatList
          data={playersOnCase}
          renderItem={({ item }) => <PlayerPawn player={item} />}
          listKey={item => item.pseudo}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};


export default Case;
