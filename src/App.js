import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./screens/Main/MainNavigator";
import { SafeAreaView } from "react-native";
import CharacterStack from "screens/Character/CharacterStack";
import { colors } from "utils/constants";
import SplashScreen from "react-native-splash-screen";
import { HeaderEmpty, HeaderMain } from "@components";

export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  });

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
            options={{ header: HeaderEmpty }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
