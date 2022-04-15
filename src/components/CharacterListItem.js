import React from "react";
import { Image, View } from "react-native";

import Button from "./Button";

import Text from "./Text";
import I18n from "utils/i18n";

const CharacterListItem = ({ character = {}, navigation }) => {
  const onPress = () => {
    navigation.navigate("CharacterDetail", character);
  };

  const { name, description, image } = character;
  return (
    <View
      style={{
        alignContent: "flex-start"
      }}
    >
      <Button
        onPress={onPress}
        style={{
          flexDirection: "row",
          paddingHorizontal: 15
        }}
      >
        <View style={{ width: 75, marginRight: 10 }}>
          <Image
            source={{ uri: image }}
            resizeMode={"contain"}
            style={{
              width: 75,
              height: 75
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text type="listItemTitle">{name}</Text>
          <Text type="longText">
            {description || I18n.t("characterListItem.emptyDescription")}
          </Text>
        </View>
      </Button>
    </View>
  );
};

export default CharacterListItem;
