import { StyleSheet } from "react-native";
import Theme from "./Theme";

module.exports = StyleSheet.create({
  roundedFull: {
    borderRadius: 100,
  },
  button: {
    width: "50%",
    borderRadius: 20,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  },
  TextButton: {
    color: Theme.TEXT_MAIN_COLOR,
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
  },
  TextButtonSm: {
    color: Theme.TEXT_MAIN_COLOR,
    textAlign: "center",
    fontSize: 13,
    paddingVertical: 10,
  },
});
