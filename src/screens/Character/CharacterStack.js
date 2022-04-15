import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CharacterDetail from "./CharacterDetail";
import CharacterComics from "./CharacterComics";
import { TabBarCustom } from "@components";

const Tab = createMaterialTopTabNavigator();

const CharacterStack = ({ route }) => (
  <Tab.Navigator
    initialRouteName="CharacterComics"
    tabBar={props => <TabBarCustom {...props} />}
    screenOptions={{ lazy: true, swipeEnabled: true }}
  >
    <Tab.Screen name="CharacterDetail" options={{ title: "info" }}>
      {props => <CharacterDetail {...props} _book={route.params?.book} />}
    </Tab.Screen>
    <Tab.Screen name="CharacterComics" options={{ title: "comics" }}>
      {props => <CharacterComics {...props} _book={route.params?.book} />}
    </Tab.Screen>
  </Tab.Navigator>
);

export default CharacterStack;
