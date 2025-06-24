import { IModifiedUserData } from "@/types/user.type";

const modifyUserData = (data: any): IModifiedUserData => ({
  id: data.user._id,
  name: data.name,
  photo: data.photo,
  isVerified: data.user.isVerified,
  email: data.user.email,
  role: data.user.role,
  address: data.address,
  contact: data.contact,
});

export default modifyUserData;
