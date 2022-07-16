import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { useState } from "react";
import {
  Button,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Player from "../components/Player";
import { GameContexts } from "../GameContext";

const Players = () => {
  const navigation = useNavigation();
  const { players, setPlayers } = useContext(GameContexts); // players' list
  const [playerInput, setPlayerInput] = useState(""); // player's input value

  //add a player to the players' list
  function addPlayer() {
    const newPlayer = { pseudo: playerInput, position: 0 };
    if (checkPlayerPseudo(newPlayer.pseudo)) {
      // reset the player's input value
      setPlayerInput("");
      // update the players' list
      return setPlayers([...players, newPlayer]);
    }
  }
  //remove a player from the players' list
  function deletePlayer(playerPseudo) {
    setPlayers(players.filter(p => p.pseudo != playerPseudo));
  }
  //check player pseudo
  function checkPlayerPseudo(pseudo) {
    // check player's pseudo length
    if (pseudo.length < 3) {
      console.log("Player pseudo must be at least 3 characters long");
      return false;
    }
    // check player's pseudo is unique
    if (players.filter(player => player.pseudo === pseudo).length > 0) {
      console.log("Player pseudo must be unique");
      return false;
    }
    return true;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <ImageBackground
        style={styles.screen}
        source={require("../assets/images/bgHome2.jpg")}
      >
        {/* Screen's Title */}
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Ajouter un joueur!</Text>
        </View>

        {/* for each player return a component */}
        <FlatList
          style={styles.listPlayers}
          data={players}
          renderItem={({ item }) => (
            <Player player={item} delete={deletePlayer} />
          )}
          keyExtractor={player => player.pseudo}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        />

        {/* player's input */}
        <TextInput
          value={playerInput}
          onChangeText={e => setPlayerInput(e)}
          placeholder="nom du joueur"
          maxLength={15}
          style={styles.textInput}
        />

        {/* button to add player */}
        <View style={styles.button}>
          <Button title="+" color={"#3f5efb"} onPress={() => addPlayer()} />
        </View>

        {/* button to add player */}
        <View style={styles.button}>
          <Button
            color={"#3f5efb"}
            disabled={players.length > 0 ? false : true}
            title="Play"
            onPress={() => navigation.navigate("BoardGame")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxTitle: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  listPlayers: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    width: "50%",
    marginVertical: 10,
  },
});

export default Players;
