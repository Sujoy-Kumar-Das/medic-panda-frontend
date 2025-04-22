"use client";
import { ILogoutParams } from "@/types";
import { IModifiedUserData } from "@/types/user.type";
import { createContext } from "react";

interface IAuthContext {
  user: IModifiedUserData | null;
  loginUser: () => void;
  logoutUser: ({ router, path }: ILogoutParams) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
