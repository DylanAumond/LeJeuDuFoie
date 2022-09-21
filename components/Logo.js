import logo from "../assets/logo.png";
import { Image, View } from "react-native";
import React from "react";

const Logo = ({ size }) => {
  const sizes = () => {
    switch (size) {
      case "sm":
        return { width: 99, height: 98 };
        break;
      case "md":
        return { width: 151, height: 150 };
        break;
      case "lg":
        return { width: 251, height: 250 };
        break;
      default:
        return { width: 251, height: 250 };
    }
  };
  return (
    <View>
      <Image
        source={logo}
        style={{ width: sizes().width, height: sizes().height }}
      />
    </View>
  );
};

export default Logo;
