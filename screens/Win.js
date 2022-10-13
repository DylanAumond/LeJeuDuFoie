import React, { useContext } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { GameContexts } from "../GameContext";

import Theme from "../Theme";
import Styles from "../Styles";

import imgWin from "../assets/images/trophee.png";
import Logo from "../components/Logo";

const Win = ({ route }) => {
  const navigation = useNavigation();

  // get the game's context
  const {
    players,
    setPlayers, // players' list
    currentPlayer,
    setCurrentPlayer, // current player
  } = useContext(GameContexts);

  // reset all players' position
  function resetPlayersPosition(players) {
    return players.map(player => {
      return { ...player, position: 0 };
    });
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={styles.container}>
        <Logo size={"md"} />

        <Text style={[Theme.TEXT_MAIN_COLOR, styles.title]}>VAINQUEUR</Text>

        <Text style={styles.pseudo}>{route.params.player.pseudo}</Text>

        <Image source={imgWin} style={styles.img} />

        {/* button next */}
        <TouchableOpacity
          title="Play"
          style={[Styles.button, styles.btn]}
          onPress={() => {
            // reset players' position
            setPlayers(resetPlayersPosition(players));

            // reset current player
            setCurrentPlayer(0);

            // go back to the players's page
            navigation.navigate("Players");
          }}
        >
          <Text style={Styles.TextButton}>Play</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginVertical: 100,
  },
  btn: {
    fontSize: 50,
    paddingHorizontal: 70,
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
    marginTop: 20,
  },
  pseudo: {
    marginTop: 35,
    color: Theme.INPUT_MAIN_BACKGROUND_COLOR,
    fontSize: 15,
  },
});

export default Win;
