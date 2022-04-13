import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./screens/Main/MainNavigator";
import { SafeAreaView } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator />
        {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
