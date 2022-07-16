import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        style={styles.home}
        source={require("../assets/images/bgHome.jpg")}
      >
        {/* Game's title */}
        <View style={styles.boxText}>
          <Text style={styles.text}>Le Jeu Du Foie</Text>
        </View>
        {/* Button Play */}
        <View style={styles.button}>
          <Button
            title="Play"
            color={"#3f5efb"}
            onPress={() => navigation.navigate("Players")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    width: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  button: {
    width: "40%",
  },
});

export default Home;
