import React from "react";
import { Text as RnText } from "react-native";
import { colors } from "utils/constants";
import I18n from "utils/i18n";

const Text = ({ style, children, label, type, ...props }) => {
  const getStyles = () => {
    if (type === "listItemTitle") {
      return {
        fontSize: 17,
        fontWeight: "700",
        color: colors.BLACK
      };
    } else if (type === "longText") {
      return {
        fontSize: 14,
        color: colors.DARK
      };
    } else if (type === "title") {
      return {
        fontSize: 20,
        fontWeight: "700",
        color: colors.BLACK,
        alignSelf: "center"
      };
    } else if (type === "sectionTitle") {
      return {
        fontSize: 15,
        fontWeight: "700",
        color: colors.BLACK
      };
    }
    return {};
  };

  return (
    <RnText
      style={{
        color: colors.GRAY,
        ...getStyles(),
        ...style
      }}
      {...props}
    >
      {label ? I18n.t(label.key || label, label.options) : children}
    </RnText>
  );
};
export default Text;
