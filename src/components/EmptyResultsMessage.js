import React from "react";
import { View } from "react-native";
import Text from "./Text";

const EmptyResultsMessage = ({ message }) => {
  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{ alignSelf: "center", marginVertical: 10 }}
        label={message}
      />
    </View>
  );
};

export default EmptyResultsMessage;
