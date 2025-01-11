"use client";
import { AuthContextProvider } from "@/context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContextProvider);

  if (!context) {
    throw new Error("useAuth must be used within an AuthContext.Provider");
  }

  const { clearUser, user, storeUser } = context;

  return { clearUser, user, storeUser };
};
