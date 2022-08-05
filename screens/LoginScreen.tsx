import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  // @ts-ignore
  const { user } = useAuth();
  return (
    <View>
      <Text>Login to the App, {user}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
