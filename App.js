import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import StackNavigator from "./navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <SafeAreaProvider>
          <StackNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
