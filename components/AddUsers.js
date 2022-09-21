import React from "react";
import { Image, View, TouchableOpacity } from "react-native";

const AddUsers = () => {
  return (
    <View style={styles.popUpContainer}>
      <TouchableOpacity>
        <Image source={close} style={styles.close} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  close: {
    width: 20,
    height: 20,
  },
  popUpContainer: {
    width: "70%",
    height: "50%",
    backgroundColor: Theme.PRIMARY_BACKGROUND_POPUP_COLOR,
    display: "none",
  },
});

export default AddUsers;
