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
import Logo from "../components/Logo";
import AddUsers from "../components/AddUsersModal";

const Players = () => {
  const navigation = useNavigation();
  const { players, setPlayers } = useContext(GameContexts); // players' list
  const [showAddUserModal, setShowAddUserModal] = useState(false); // modal add players

  //remove a player from the players' list
  function deletePlayer(playerPseudo) {
    setPlayers(players.filter(p => p.pseudo != playerPseudo));
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
      {/* btn add users modal */}
      <View style={styles.addUsersContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowAddUserModal(!showAddUserModal);
          }}
        >
          <Text style={styles.addUsers}>+</Text>
        </TouchableOpacity>
      </View>

      {/* modal add users */}
      {showAddUserModal ? (
        <AddUsers statue={showAddUserModal} close={setShowAddUserModal} />
      ) : null}

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
    color: Theme.TEXT_MAIN_COLOR,
  },
});

export default Players;
