"use client";
import { IModifiedUserData } from "@/types/user.type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createContext } from "react";

interface IUser {
  userId: string;
  role: string;
}

interface IAuthContext {
  user: IModifiedUserData | null;
  loginUser: () => void;
  logoutUser: (router: AppRouterInstance) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
