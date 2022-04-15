import React from "react";
import { TouchableOpacity } from "react-native";

const Button = ({ style, children, label, onPress = () => {}, ...props }) => (
  <TouchableOpacity style={{ ...style }} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default Button;
