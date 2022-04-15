import React from "react";
import { Image, View } from "react-native";

import Button from "./Button";
import Text from "./Text";

const Event = ({ event }) => {
  const openEvent = () => {};

  return (
    <Button
      style={{
        flex: 1,
        flexDirection: "row"
      }}
      onPress={openEvent}
    >
      <View style={{ width: 100, marginRight: 5 }}>
        <Image
          source={{ uri: event.imageUrl }}
          resizeMode="stretch"
          style={{ aspectRatio: 0.75 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text type="listItemTitle">{event.title}</Text>
        <Text type="longText" style={{ marginTop: 10 }}>
          {event.description}
        </Text>
      </View>
    </Button>
  );
};
export default Event;
