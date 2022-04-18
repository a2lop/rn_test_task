import React from "react";

import { View } from "react-native";

import LineDivider from "./LineDivider";
import Text from "./Text";

const Section = ({ title, children, hideDivider }) => (
  <View>
    <View
      style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
    >
      <View style={{ flex: 1 }}>
        {title ? (
          <Text type="sectionTitle" label={title} numberOfLines={1} />
        ) : (
          <></>
        )}
      </View>
    </View>
    {children}
    {!hideDivider ? <LineDivider long /> : <></>}
  </View>
);

export default Section;
