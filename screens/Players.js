import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Player from "../components/Player";
import { GameContexts } from "../GameContext";
import Theme from "../Theme";
import Style from "../Styles";
import Logo from "../components/Logo";
import addUser from "../assets/add-user.png";
import close from "../assets/close.png";

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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Theme.MAIN_BACKGROUND_COLOR }}
    >
      <StatusBar />
      {/* Logo */}
      <View style={styles.logo}>
        <Logo size={"md"} />
      </View>
      {/* Screen's Title */}
      <View>
        <Text style={styles.text}>Ajouter un joueur!</Text>
      </View>

      {/* for each player return a component */}
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <Player player={item} delete={deletePlayer} />
        )}
        keyExtractor={player => player.pseudo}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      />
      {/* btn add users popup */}
      <View style={styles.addUsersContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={addUser} style={styles.addUsers} />
        </TouchableOpacity>
      </View>

      {/* player's input */}
      <TextInput
        value={playerInput}
        onChangeText={e => setPlayerInput(e)}
        placeholder="nom du joueur"
        maxLength={15}
      />

      {/* button to add player */}
      <View>
        <Button title="+" color={"#3f5efb"} onPress={() => addPlayer()} />
      </View>

      {/* button to add player */}
      <View>
        <Button
          color={"#3f5efb"}
          disabled={players.length > 0 ? false : true}
          title="Play"
          onPress={() => navigation.navigate("BoardGame")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Theme.TEXT_MAIN_COLOR,
    fontSize: 20,
    textAlign: "center",
  },
  addUsersContainer: {
    width: "100%",
    height: "10%",
  },
  addUsers: {
    width: "10%",
    height: "75%",
  },
});

export default Players;
