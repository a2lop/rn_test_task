import React from "react";
import { View } from "react-native";
import { colors } from "utils/constants";

const LineDivider = ({ style, marginVertical = 10, long }) => (
  <View
    style={{
      ...{
        borderColor: colors.SILVER,
        borderTopWidth: 0,
        borderBottomWidth: long ? 8 : 2,
        marginHorizontal: -15,
        marginVertical
      },
      ...style
    }}
  />
);

export default LineDivider;
