import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { playerAction } from "../actions/player";
import { GameContexts } from "../GameContext";
import Theme from "../Theme";
import Styles from "../Styles";
import Logo from "../components/Logo";

const Insctruction = ({ route, navigation }) => {
  // get the rule from the navigation's params
  const { rule } = route.params.case;

  // get the game's context
  const {
    players,
    setPlayers, // players' list
    currentPlayer,
    setCurrentPlayer, // current player
  } = useContext(GameContexts);

  return (
    <SafeAreaView style={style.insctructionContainer}>
      <StatusBar />
      {/*  game logo */}
      <Logo size={"sm"} />

      <View style={style.ruleContainer}>
        {/* case's rule */}
        <Text style={style.textRule}>{rule}</Text>
      </View>

      {/* button next */}
      <TouchableOpacity
        title="Play"
        style={[Styles.button, style.btn]}
        onPress={() => {
          // if case has an action
          if (route.params.case.action !== undefined) {
            // get the action from case
            const action = route.params.case.action;

            // apply the action to the players
            playerAction(
              action.type, // action type from case
              {
                player: players[currentPlayer], // current player from context
                caseId: action.data.case,
              } // action data from case
            );

            // update players' list
            setPlayers([...players]);
          }
          // if different from replay
          if (rule != "Relance") {
            // change the current player
            setCurrentPlayer(playerAction("next", { players, currentPlayer }));
          }
          // go back to the boardGame screen
          navigation.navigate("BoardGame");
        }}
      >
        <Text style={Styles.TextButton}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  insctructionContainer: {
    flex: 1,
    backgroundColor: Theme.MAIN_BACKGROUND_COLOR,
    justifyContent: "space-around",
    alignItems: "center",
  },
  ruleContainer: {
    flex: 1,
    alignItems: "center",
    width: "80%",
  },

  textRule: {
    color: Theme.TEXT_MAIN_COLOR,
    fontSize: 30,
    marginTop: "30%",
    textAlign: "center",
  },

  btn: {
    marginBottom: 70,
  },
});

export default Insctruction;
