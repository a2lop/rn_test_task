import { Text } from "@components";
import React from "react";
import { View } from "react-native";
import { colors } from "utils/constants";
import Button from "./Button";

const TabBarCustom = ({ state, descriptors, navigation, position }) => (
  <View style={{ flexDirection: "row" }}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <Button
          key={index}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          onPress={onPress}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.DARK,
            borderBottomColor: isFocused ? colors.SILVER : colors.DARK,
            borderBottomWidth: 5,
            paddingTop: 10,
            paddingBottom: 6
          }}
        >
          <Text
            label={`common.tabs.${label}`}
            style={{
              color: isFocused ? colors.WHITE : colors.SILVER,
              fontSize: 13,
              fontWeight: isFocused ? "700" : "normal"
            }}
          />
        </Button>
      );
    })}
  </View>
);

export default TabBarCustom;
