import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Theme from "../Theme";
import close from "../assets/close.png";

const Player = ({ player, ...props }) => {
  return (
    <View style={styles.card}>
      {/* player's pseudo */}
      <Text style={styles.cardText}>{player.pseudo}</Text>
      {/* button to delete player*/}
      <TouchableOpacity onPress={() => props.delete(player.pseudo)}>
        <Image tintColor="white" source={close} style={styles.close} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: "5%",

    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
    borderRadius: 10,
    marginVertical: 50,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },

  close: {
    width: 15,
    height: 15,
  },
  cardText: {
    color: Theme.TEXT_MAIN_COLOR,
    fontWeight: "bold",
  },
});

export default Player;
