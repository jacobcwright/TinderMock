import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useAuth from "../hooks/useAuth";

export default function LoginScreen() {
  // @ts-ignore
  const { signInWithGoogle } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bg}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity style={styles.btn}>
          <Text>Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btn: {
    position: "absolute",
    bottom: 160,
    width: 200,
    backgroundColor: "white",
    alignItems: "center",
    padding: 16,
    borderRadius: 40,
  },
});
