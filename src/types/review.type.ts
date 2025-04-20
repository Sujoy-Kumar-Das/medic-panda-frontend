interface IUser {
  _id: string;
  photo: string;
  name: string;
}

export interface IReply {
  _id: string;
  user: IUser;
  reply: string;
  createdAt: string;
}

export interface IReview {
  _id: string;
  product: string;
  comment: string;
  rating: number;
  createdAt: string;
  user: IUser;
  replies: IReply[];
}
