import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StudyScreen from "../screens/StudyScreen";
import { Entypo, Feather, FontAwesome, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    const icon_color = "rgb(16 185 129)";
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color={icon_color} />
            ) : (
              <AntDesign name="home" size={24} color={icon_color} />
            ),
        }}
      />
      <Tab.Screen
        name="Study"
        component={StudyScreen}
        options={{
          tabBarLabel: "Study",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="book-education"
                size={24}
                color={icon_color}
              />
            ) : (
              <MaterialCommunityIcons
                name="book-education-outline"
                size={24}
                color={icon_color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
        //   tabBarLabel: "Profile",
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="user" size={24} color={icon_color} />
            ) : (
              <Feather name="user" size={24} color={icon_color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
