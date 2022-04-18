import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Animated, Easing } from "react-native";
import { colors } from "utils/constants";

const Loading = ({ size = 50, color = colors.GRAY, isVisible, style }) => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"]
  });

  if (isVisible !== undefined && !isVisible) {
    return <></>;
  }

  return (
    <Animated.View
      style={{
        transform: [{ rotate: spin }],
        width: size,
        alignSelf: "center",
        ...style
      }}
    >
      <Icon name="sync" size={size} color={color} />
    </Animated.View>
  );
};

export default Loading;
