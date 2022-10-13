import React from "react";
import { ImageBackground, Modal, StyleSheet, Text, View } from "react-native";
import Theme from "../Theme";
import Styles from "../Styles";

const CaseModal = ({ ...props }) => {
  // return all players on the selected case
  const players = () => {
    // check if at least a player is on the selected case
    if (props.playersOnCase.length > 0) {
      //for each player on the selected case return the player's pseudo
      return props.playersOnCase.map((player, index) => (
        <View style={style.textPlayer} key={index}>
          <View
            style={[
              { backgroundColor: player.color },
              Styles.colorPlayer,
              Styles.roundedFull,
            ]}
          ></View>

          <Text style={style.text}>{player.pseudo}</Text>
        </View>
      ));
    }
    // if no players are on the selected case
    return (
      <Text style={style.text}> Il n'y a pas de joueur sur cette case</Text>
    );
  };
  return (
    <Modal transparent={true} visible={props.isOpen}>
      <View style={style.caseModalContainer}>
        {/* Modal Content */}
        <View style={style.caseModal}>
          {/* Rule's icon */}
          <View style={[Styles.roundedFull, style.roundIcon]}>
            {/* Icon */}
            {props.case !== undefined ? (
              <ImageBackground
                source={props.case.image}
                resizeMode="cover"
                style={[{ margin: "15%" }, Styles.caseModalBg]}
                tintColor="white"
              />
            ) : (
              <Text>not found</Text>
            )}
          </View>
          {/* Rule's text */}
          {props.case !== undefined ? (
            <Text
              style={[
                {
                  width: "80%",
                },
                Styles.textmd,
              ]}
            >
              {props.case.rule}
            </Text>
          ) : (
            <Text>not found</Text>
          )}
          {/* list of players  */}
          {players()}
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  caseModalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.BLUR_EFFECT_COLOR,
  },

  caseModal: {
    width: "90%",
    height: "40%",

    backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
    opacity: 1,

    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  roundIcon: {
    position: "absolute",
    top: "-10%",
    borderWidth: 3,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
    padding: "3%",
    margin: "0.8%",
    width: "20%",
    height: undefined,
    aspectRatio: 1 / 1,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  },
  textPlayer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: Theme.TEXT_MAIN_COLOR,
  },
});

export default CaseModal;
