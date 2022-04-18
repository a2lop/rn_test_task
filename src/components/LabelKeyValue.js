import React from "react";

import { colors } from "utils/constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "./Button";
import Text from "./Text";

const LabelKeyValue = ({
  label,
  keyText,
  value,
  icon,
  iconColor = "DARK",
  keyColor = "DARK",
  valueColor = "DARK",
  onPress = () => {}
}) => (
  <Button
    onPress={onPress}
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5
    }}
  >
    {icon ? (
      <Icon
        name={icon}
        size={20}
        color={colors[iconColor]}
        style={{ marginRight: 5 }}
      />
    ) : (
      <></>
    )}
    <Text style={{ color: colors[keyColor], fontWeight: "700" }} label={label}>
      {keyText || undefined}
    </Text>
    <Text style={{ color: colors[valueColor] }}>{value}</Text>
  </Button>
);

export default LabelKeyValue;
