import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CharacterDetail from "./CharacterDetail";
import CharacterComics from "./CharacterComics";
import { TabBarCustom } from "@components";
import CharacterEvents from "./CharacterEvents";
import CharacterSeries from "./CharacterSeries";
import CharacterStories from "./CharacterStories";

const Tab = createMaterialTopTabNavigator();

const CharacterStack = ({ route }) => {
  // console.log("rout", route);
  return (
    <Tab.Navigator
      initialRouteName="CharacterDetail"
      tabBar={props => <TabBarCustom {...props} />}
      screenOptions={{ lazy: true, swipeEnabled: true }}
    >
      <Tab.Screen name="CharacterDetail" options={{ title: "info" }}>
        {props => (
          <CharacterDetail {...props} _character={route.params?.character} />
        )}
      </Tab.Screen>
      <Tab.Screen name="CharacterComics" options={{ title: "comics" }}>
        {props => (
          <CharacterComics {...props} _character={route.params?.character} />
        )}
      </Tab.Screen>
      <Tab.Screen name="CharacterEvents" options={{ title: "events" }}>
        {props => (
          <CharacterEvents {...props} _character={route.params?.character} />
        )}
      </Tab.Screen>
      <Tab.Screen name="CharacterSeries" options={{ title: "series" }}>
        {props => (
          <CharacterSeries {...props} _character={route.params?.character} />
        )}
      </Tab.Screen>
      <Tab.Screen name="CharacterStories" options={{ title: "stories" }}>
        {props => (
          <CharacterStories {...props} _character={route.params?.character} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default CharacterStack;
