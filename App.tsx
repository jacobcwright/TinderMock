import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes down call auth stuff to children (from HOC) */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
