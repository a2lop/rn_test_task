import React from "react";
import { View, Image } from "react-native";
import { colors } from "utils/constants";
import Button from "./Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderEmpty = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        backgroundColor: colors.DARK,
        height: 45,
        paddingTop: 5,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Button onPress={goBack}>
        <Icon name="chevron-left" size={20} color={colors.WHITE} />
      </Button>
      <Image
        source={require("assets/logo.png")}
        style={{
          flex: 1,
          height: 35,
          resizeMode: "contain",
          width: "100%"
        }}
      />
      <View style={{ width: 30 }} />
    </View>
  );
};

export default HeaderEmpty;
