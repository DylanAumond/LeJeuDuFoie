import { useNavigation } from "@react-navigation/native";
import React from "react";
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
import Theme from "../Theme";
import Styles from "../Styles";
import Logo from "../components/Logo";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Theme.MAIN_BACKGROUND_COLOR }}
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
          style={Styles.button}
          onPress={() => navigation.navigate("Players")}
        >
          <Text style={Styles.TextButton}>Play</Text>
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

  btnContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
