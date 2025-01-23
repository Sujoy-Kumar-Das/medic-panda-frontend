"use client";
import { createContext } from "react";

interface IUser {
  userId: string;
  role: string;
}

interface IAuthContext {
  user: IUser | null;
  clearUser: () => void;
  storeUser: (token: string) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
