import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";




import CustomDrawerContent from "./DrawerNavigation";
import BottomNavigation from "./BottomNavigation";
import SigninScreen from "../screens/SigninScreen";



const Drawer = createDrawerNavigator();

const StackNavigator = () => {

  return (
    <NavigationContainer>
      {/* <BottomTabs /> */}
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={BottomNavigation} />
        <Drawer.Screen name="Study" component={BottomNavigation} />
        <Drawer.Screen name="Profile" component={BottomNavigation} />
        <Drawer.Screen name="Signin" component={SigninScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
