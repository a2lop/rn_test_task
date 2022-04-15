import React from "react";
import { Image, View } from "react-native";

import Button from "./Button";
import Text from "./Text";

const Comic = ({ comic }) => {
  const openComic = () => {};

  return (
    <Button
      style={{ flex: 1, paddingHorizontal: 5, marginBottom: 10 }}
      onPress={openComic}
    >
      {/* <View style={{ flex: 1 }}> */}
      <Image
        source={{ uri: comic.imageUrl }}
        resizeMode="stretch"
        style={{ aspectRatio: 0.75 }}
      />
      {/* </View> */}
      <Text type="listItemTitle">{comic.title}</Text>
    </Button>
  );
};
export default Comic;
