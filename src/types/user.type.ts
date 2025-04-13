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

export interface IUserAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IModifiedUserData {
  id: string;
  name: string;
  photo: string;
  isVerified: boolean;
  email: string;
  role: "admin" | "user" | "super-admin";
  contact: string;
  address: IUserAddress;
}
