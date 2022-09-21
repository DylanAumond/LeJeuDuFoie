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
import Theme from "../Theme";
import Style from "../Styles"

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
      style={[styles.case, Style.roundedFull]}
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

const styles = StyleSheet.create ({
  case:{
    filter: 'invert(1)',
    padding: 10,
    width: 50,
    height: 50,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  }
})


export default Case;
