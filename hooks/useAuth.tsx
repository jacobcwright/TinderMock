import { View, Text } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import Config from "react-native-config";

const AuthContext = createContext({
  // initial state of context (empty in this case)
});

// for prod, use env vars
const config = {
  androidClientId: Config.ANDROID_CLIENT_ID,
  iosClientId: Config.IOS_CLIENT_ID,
  //   expoClientId??
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }: any) => {
  const [accessToken, setAccessToken] = useState();
  //   const [request, response, promptAsync] = await Google.useAuthRequest(config);
  //   useEffect(() => {
  //     if (response?.type === "success") {
  //       setAccessToken(response?.authentication?.accessToken as any);
  //     }
  //   }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  }

  //   const signInWithGoogle = async () => {
  //     try {
  //       await promptAsync({ useProxy: true });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <AuthContext.Provider
      value={{
        user: "Jacob",
        // user: null,
        // signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
