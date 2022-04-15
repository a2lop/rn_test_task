import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./screens/Main/MainNavigator";
import { SafeAreaView } from "react-native";
import CharacterDetail from "screens/Character/CharacterDetail";
import CharacterStack from "screens/Character/CharacterStack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Character" headerMode="screen">
          <Stack.Screen name="Main" component={MainNavigator} />
          {/* <Stack.Screen name="CharacterDetail" component={CharacterDetail} /> */}
          <Stack.Screen
            name="Character"
            component={CharacterStack}
            options={{ header: undefined, headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
