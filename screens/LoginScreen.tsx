import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

export default function LoginScreen() {
  // @ts-ignore
  const { signInWithGoogle } = useAuth();
  return (
    <View>
      <Text>Login to the App</Text>
      <Button title="Login with Google" onPress={signInWithGoogle} />
    </View>
  );
}

const styles = StyleSheet.create({});
