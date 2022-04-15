import React from "react";
import { View } from "react-native";
import { colors } from "utils/constants";

const ListItemSeparator = ({ marginVertical = 10 }) => {
  return (
    <View
      style={{
        borderBottomColor: colors.SILVER,
        borderBottomWidth: 2,
        marginHorizontal: -15,
        marginVertical
      }}
    />
  );
};

export default ListItemSeparator;
