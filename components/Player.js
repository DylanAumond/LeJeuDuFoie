import { Button, StyleSheet, Text, View } from "react-native";

const Player = ({ player, ...props }) => {
  return (
    <View style={styles.card}>
      {/* player's pseudo */}
      <Text>{player.pseudo}</Text>
      {/* button to delete player*/}
      <View style={styles.button}>
        <Button onPress={() => props.delete(player.pseudo)} title="delete" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 14,
    padding: 10,
  },
  button: {
    width: "50%",
  },
});

export default Player;
