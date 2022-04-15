import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "./Text";

const Button = ({ style, children, label, onPress = () => {}, ...props }) => {
  const getStyles = () => {
    // if (type === "long") {
    //   return {
    //     color: colorsV2.SILVER
    //   };
    // }
    return {};
  };

  return (
    <TouchableOpacity style={{ ...style }} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;
