import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

const AuthContext = createContext({
  // initial state of context (empty in this case)
});

export const AuthProvider = ({ children }: any) => {
  return (
    <AuthContext.Provider
      value={{
        user: "Jacob",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
