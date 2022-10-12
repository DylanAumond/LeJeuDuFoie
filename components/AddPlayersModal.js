import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  Modal,
} from "react-native";
import React, { useContext } from "react";
import { useState } from "react";
import Theme from "../Theme";
import close from "../assets/close.png";
import { GameContexts } from "../GameContext";
import Player from "./Player";
import Style from "../Styles";

const AddUsers = ({ ...props }) => {
  const { players, setPlayers } = useContext(GameContexts); // players' list
  const [playerInput, setPlayerInput] = useState(""); // player's input value

  const colorList = [
    "#ffffff",
    "#000000",
    "#f0f0f0",
    "#990000"
  ]

  //add a player to the players' list
  function addPlayer() {
    const newPlayer = { pseudo: playerInput, position: 0,color: colorList[players.length] };
    if (checkPlayerPseudo(newPlayer.pseudo)) {
      // reset the player's input value
      setPlayerInput("");
      // update the players' list
      return setPlayers([...players, newPlayer]);
    }
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

    // check number of players
    if (players.length >= 12){
      console.log("Number of players must be over 12");
      return false;
    }

    return true;
  }

  return (
    <Modal transparent={true} visible={props.statue}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <View style={styles.headerModal}>
              <Text style={styles.title}>Ajoute un soldat </Text>
              {/* btn close modal */}
              <TouchableOpacity
                onPress={() => {
                  props.close(false);
                }}
                style={styles.btnClose}
              >
                <Image source={close} style={styles.close} />
              </TouchableOpacity>
            </View>

            <View style={styles.addPlayersContainer}>
              <View>
                {/* player's input */}
                <TextInput
                  value={playerInput}
                  onChangeText={e => setPlayerInput(e)}
                  placeholder="nom du joueur"
                  maxLength={15}
                  style={styles.inputPlayersName}
                />
                {/* button to add player */}
                <TouchableOpacity
                  color={"#3f5efb"}
                  onPress={() => addPlayer()}
                  style={styles.button}
                >
                  <Text style={Style.TextButtonSm}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.BLUR_EFFECT_COLOR,
  },
  headerModal: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  close: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginTop: 10,
  },
  title: {
    color: "white",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  },
  modalContent: {
    width: "90%",
    height: "50%",
    borderRadius: 20,
    backgroundColor: Theme.PRIMARY_BACKGROUND_POPUP_COLOR,
    borderWidth: 5,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
  },
  addPlayersContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
    marginTop: 20,
  },
  inputPlayersName: {
    backgroundColor: "white",
    width: "90%",
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 20,
  },
});

export default AddUsers;
