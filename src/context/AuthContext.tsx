"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createContext } from "react";

interface IUser {
  userId: string;
  role: string;
}

interface IAuthContext {
  user: IUser | null;
  loginUser: (token: string) => void;
  logoutUser: (router: AppRouterInstance) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
