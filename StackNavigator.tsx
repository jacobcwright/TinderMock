import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  StackActionHelpers,
} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
