import React from "react";
import { Text, View } from "react-native";

import Styles from "../Styles";

const PlayerPawn = ({ player }) => {
  return (
    <View
      style={[
        { backgroundColor: player.color, width: 10, height: 10 },
        Styles.roundedFull,
      ]}
    ></View>
  );
};

export default PlayerPawn;
