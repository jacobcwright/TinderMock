import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import { useAuthRequest } from "expo-auth-session/build/providers/Facebook";

const AuthContext = createContext({
  // initial state of context (empty in this case)
});

// for prod, use env vars
const config = {
  androidClientId: process.env.ANDROID_CLIENT_ID,
  iosClientId: process.env.IOS_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }: any) => {
  const signIn = async () => {
    await Google.useAuthRequest();
  };

  return (
    <AuthContext.Provider
      value={{
        // user: "Jacob",
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
