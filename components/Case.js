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
import Styles from "../Styles";

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
      style={[style.case, Styles.roundedFull]}
    >
      {/* case's image */}
      <ImageBackground
        source={caseData.image}
        resizeMode="contain"
        style={Styles.caseModalBg}
        tintColor="white"
      >
        {/* players who are on the case */}
        <FlatList
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          data={playersOnCase}
          renderItem={({ item }) => <PlayerPawn player={item} />}
          listKey={item => item.pseudo}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  case: {
    borderWidth: 3,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
    padding: "3%",
    margin: "0.8%",
    width: "15%",
    height: undefined,
    aspectRatio: 1 / 1,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  },
});

export default Case;
