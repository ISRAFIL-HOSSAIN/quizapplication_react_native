import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const navigateToScreen = (route) => {
    navigation.navigate(route);
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("Study")}
      >
        <Text>Study</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("Profile")}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("Signin")}
      >
        <Text>Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  drawerItem: {
    marginBottom: 10,
  },
});

export default CustomDrawerContent;
