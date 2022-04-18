import i18n from "i18n-js";
import React from "react";
import { TextInput, View } from "react-native";
import { colors } from "utils/constants";

const Input = ({ value, setValue, placeholder }) => (
  <View>
    <TextInput
      style={{
        backgroundColor: colors.SILVER,
        padding: 10
      }}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder ? i18n.t(placeholder) : ""}
    />
  </View>
);

export default Input;
