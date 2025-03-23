import { IUserRoles } from "./user.role.type";

export interface IUser {
  email: string;
  password: string;
  name: string;
  photo: string;
}

export interface IUserInfo {
  userId: string;
  role: string;
}

export interface IUserData {
  _id: string;
  email: string;
  role: IUserRoles;
  isVerified: boolean;
  isBlocked: boolean;
}
