import React from "react";
import { Image } from "react-native";

import Button from "./Button";
import Text from "./Text";

const Comic = ({ comic }) => {
  const openComic = () => {};

  return (
    <Button
      style={{ flex: 1, paddingHorizontal: 5, marginBottom: 20 }}
      onPress={openComic}
    >
      <Image
        source={{ uri: comic.imageUrl }}
        resizeMode="stretch"
        style={{ aspectRatio: 0.75 }}
      />
      <Text type="listItemTitle" style={{ marginTop: 10 }} numberOfLines={2}>
        {comic.title}
      </Text>
    </Button>
  );
};
export default Comic;
