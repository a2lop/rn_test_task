import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./screens/Main/MainNavigator";
import { SafeAreaView } from "react-native";
import CharacterStack from "screens/Character/CharacterStack";
import { colors } from "utils/constants";
import HeaderMain from "components/HeaderMain";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.DARK }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" headerMode="screen">
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{ header: HeaderMain }}
          />
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
