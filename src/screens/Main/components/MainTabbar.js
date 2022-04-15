import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../utils/constants";

const FocusedGradient = ["#4c669f", "#3b5998", "#192f6a"];
const NotFocusedGradient = ["#ffffff", "#ffffff"];

const MainTabbar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.BLACK,
        height: 50
      }}
    >
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

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <View
            key={label}
            style={{
              flex: 1
            }}
          >
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                minHeight: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                name="home"
                color={colors.WHITE}
                size={isFocused ? 24 : 20}
              />
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: isFocused ? "bold" : "normal",
                  fontSize: isFocused ? 16 : 14
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default MainTabbar;
