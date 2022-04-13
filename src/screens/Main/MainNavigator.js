import * as React from "react";
import Home from "./Home";
import Search from "./Search";
import { COLORS } from "../../utils/constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainTabbar from "./components/MainTabbar";

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MainTabbar {...props} />}
      tabBarPosition="bottom"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
