import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const themeStyles = {
    backgroundColor: theme.background,
    color: theme.text,
  };

  return (
    <View
      style={[
        themeStyles,
        {
          height: "100%",
        },
      ]}
    >
      <Text className="text-3xl text-green-500 ">HomeScreen</Text>
    </View>
  );
}
