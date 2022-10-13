import { StyleSheet } from "react-native";
import Theme from "./Theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.MAIN_BACKGROUND_COLOR,
    justifyContent: "space-around",
    alignItems: "center",
  },
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
  textmd: {
    fontSize: 20,
    color: Theme.TEXT_MAIN_COLOR,
  },
  textlg: {
    fontSize: 25,
    color: Theme.TEXT_MAIN_COLOR,
  },
  colorPlayer: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  caseModalBg: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Styles;
