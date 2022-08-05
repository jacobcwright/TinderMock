import { View, Text } from "react-native";
import { createContext, useContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import Config from "react-native-config";

const AuthContext = createContext({
  // initial state of context (empty in this case)
});

// for prod, use env vars
const config = {
  androidClientId: Config.ANDROID_CLIENT_ID,
  iosClientId: Config.IOS_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }: any) => {
  const signInWithGoogle = async () => {
    Google.useAuthRequest(config).then(async (loginResult: any) => {
      if (loginResult.type === "success") {
        // login
        console.log(loginResult);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        // user: "Jacob",
        user: null,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
