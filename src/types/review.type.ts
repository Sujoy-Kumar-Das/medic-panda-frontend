export interface IUser {
  _id: string;
  photo: string;
  name: string;
}

export interface IReview {
  _id: string;
  product: string;
  comment: string;
  rating: number;
  createdAt: string;
  user: IUser;
}
