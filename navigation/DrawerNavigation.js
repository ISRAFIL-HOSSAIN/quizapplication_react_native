import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons"; // Replace with your icon library

const DrawerItem = ({ label, iconName, onPress,}) => {
  const navigation = useNavigation();
  const focused = navigation.isFocused();
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.drawerItem, focused && styles.focusedItem , {
        backgroundColor: theme.secondary,
        color: theme.color,
      } ]}
      onPress={onPress}
    >
      <Icon
        name={iconName}
        size={20}
        color={focused ? theme.primary : theme.secondary}
      />
      <Text style={[styles.drawerItemText, { color: theme.text }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};


const CustomDrawerContent = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { isDarkMode, toggleTheme, theme } = useTheme();

  const themeStyles = {
    backgroundColor: theme.background,
    color: theme.text,
  };

  const navigateToScreen = (route) => {
    navigation.navigate(route);
  };

  return (
    <View
      style={[
        styles.container,
        themeStyles,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <StatusBar
       backgroundColor={theme.background}
       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        hidden={false}
      />
      <View style={[styles.contentContainer, themeStyles]}>
        <View style={styles.imageBox}>
          <Text>Image Box</Text>
        </View>
        <DrawerItem
          label="Home"
          iconName="home"
          onPress={() => navigateToScreen("Home")}
         

        />
        <DrawerItem
          label="Study"
          iconName="book"
          onPress={() => navigateToScreen("Study")}
         
        />
        <DrawerItem
          label="Profile"
          iconName="user"
          onPress={() => navigateToScreen("Profile")}
         
        />
      </View>
      <View style={styles.signinButtonContainer}>
        <View style={styles.toggleContainer}>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: theme.secondary, true: theme.primary }}
            thumbColor={theme.background}
            icon={
              <FontAwesome
                name={isDarkMode ? "moon-o" : "sun-o"}
                size={20}
                color={theme.text}
              />
            }
          />
          <Text>{isDarkMode ? "🌞" : "🌙"}</Text>
        </View>
      </View>
      <View style={styles.signinButtonContainer}>
        <DrawerItem
          label="Signin"
          iconName="sign-in"
          onPress={() => navigateToScreen("Signin")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  focusedItem: {
    backgroundColor: "#f0f0f0",
  },
  drawerItemText: {
    marginLeft: 10,
  },
  imageBox: {
    width: "100%",
    height: 180,
    backgroundColor: "blue",
  },
  signinButtonContainer: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  toggleText: {
    marginRight: 10,
  },
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 30,
    padding: 5,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default CustomDrawerContent;
