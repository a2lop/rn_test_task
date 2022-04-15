import React from "react";
import { Image, View } from "react-native";

import Button from "./Button";
import Text from "./Text";

const Serie = ({ serie }) => {
  const openSerie = () => {};

  return (
    <Button
      style={{
        flex: 1,
        flexDirection: "row"
      }}
      onPress={openSerie}
    >
      <View style={{ width: 100, marginRight: 5 }}>
        <Image
          source={{ uri: serie.imageUrl }}
          resizeMode="stretch"
          style={{ aspectRatio: 0.75 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text type="listItemTitle">{serie.title}</Text>
        <Text type="longText" style={{ marginTop: 10 }}>
          {serie.description}
        </Text>
      </View>
    </Button>
  );
};
export default Serie;
