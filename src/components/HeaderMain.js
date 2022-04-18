import React from "react";
import { View, Image } from "react-native";
import { colors } from "utils/constants";

const HeaderMain = () => (
  <View style={{ backgroundColor: colors.DARK, height: 45, paddingTop: 5 }}>
    <Image
      source={require("assets/logo.png")}
      style={{
        height: 35,
        resizeMode: "contain",
        width: "100%"
      }}
    />
  </View>
);

export default HeaderMain;
