import { useNavigation } from "@react-navigation/native";
import React from "react";
import Styles from "../Theme";
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

import Logo from "../components/Logo";
import Theme from "../Theme";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Styles.MAIN_BACKGROUND_COLOR }}
    >
      <StatusBar />
      {/* Logo */}
      <View style={styles.logo}>
        <Logo size={"lg"} />
      </View>
      {/* Button Play */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          title="Play"
          color={"#3f5efb"}
          style={styles.button}
          onPress={() => navigation.navigate("Players")}
        >
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "35%",
    borderRadius: 20,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  },
  btnContainer: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
