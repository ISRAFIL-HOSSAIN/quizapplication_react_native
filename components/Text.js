import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

const LargeText = ({ children, style }) => {
  return <RNText style={[styles.text1, style]}>{children}</RNText>;
};

const MediumText = ({ children, style }) => {
  return <RNText style={[styles.text2, style]}>{children} </RNText>;
};

const SmallText = ({ children, style }) => {
  return <RNText style={[styles.text3, style]}>{children} </RNText>;
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 28,
    color: "black",
  },
  text2: {
    fontSize: 18,
    color: "black",
  },
  text3: {
    fontSize: 12,
    color: "black",
  },
});
export default { LargeText, MediumText, SmallText };
