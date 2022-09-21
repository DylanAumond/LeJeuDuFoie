import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Theme from "../Theme";
import Style from "../Styles";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.MAIN_BACKGROUND_COLOR }}>
      <StatusBar />
      {/* Game's title */}
      <View>
        <Text>Le Jeu Du Foie</Text>
      </View>
      {/* Button Play */}
      <View>
        <Button
          title="Play"
          color={"#3f5efb"}
          onPress={() => navigation.navigate("Players")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
