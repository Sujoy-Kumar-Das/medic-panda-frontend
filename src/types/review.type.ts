export interface IUserInfo {
  email: string;
  userId: string;
  photo: string;
  name: string;
}

export interface IReview {
  _id: string;
  product: string;
  comment: string;
  rating: number;
  createdAt: string;
  userInfo: IUserInfo;
}
