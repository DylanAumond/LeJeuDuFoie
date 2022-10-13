import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Player from "../components/Player";
import { GameContexts } from "../GameContext";
import Theme from "../Theme";
import Logo from "../components/Logo";
import AddUsers from "../components/AddPlayersModal";
import Style from "../Styles";

const Players = () => {
  const navigation = useNavigation();
  const { players, setPlayers } = useContext(GameContexts); // players' list
  const [showAddUserModal, setShowAddUserModal] = useState(false); // modal add players

  //remove a player from the players' list
  function deletePlayer(playerPseudo) {
    setPlayers(players.filter(p => p.pseudo != playerPseudo));
  }

  return (
    <SafeAreaView style={styles.playersContainer}>
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
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
        renderItem={({ item }) => (
          <Player player={item} delete={deletePlayer} />
        )}
        keyExtractor={player => player.pseudo}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      />
      {/* btn add users modal */}
      <View style={styles.btnAddPlayersContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowAddUserModal(!showAddUserModal);
          }}
        >
          <Text style={[styles.btnAddPlayes, Style.roundedFull]}>+</Text>
        </TouchableOpacity>
      </View>

      {/* modal add users */}
      {showAddUserModal ? (
        <AddUsers statue={showAddUserModal} close={setShowAddUserModal} />
      ) : null}

      {/* button to add player */}
      <View style={[styles.playContainer, Style.button]}>
        <TouchableOpacity
          disabled={players.length > 0 ? false : true}
          onPress={() => navigation.navigate("BoardGame")}
        >
          <Text style={Style.TextButton}>play</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  playersContainer: {
    flex: 1,
    backgroundColor: Theme.MAIN_BACKGROUND_COLOR,
  },
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
  btnAddPlayersContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAddPlayes: {
    fontSize: 50,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
    color: Theme.TEXT_MAIN_COLOR,
    paddingHorizontal: 20,
    marginBottom: 70,
  },
  playContainer: {
    marginHorizontal: 100,
    marginBottom: 50,
  },
});

export default Players;
