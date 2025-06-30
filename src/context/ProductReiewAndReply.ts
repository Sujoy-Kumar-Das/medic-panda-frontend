import { IReview } from "@/types";
import { createContext } from "react";

export interface IProductReviewAndReplyAction {
  show: string | undefined;
  add: string | undefined;
  edit: string | undefined;
}

interface IReviewContext {
  add: string | undefined;
  edit: string | undefined;
  activeReview: IReview | undefined;
  handleChangeAction: (
    nextAction: Partial<IProductReviewAndReplyAction>,
    review: IReview | undefined
  ) => void;
}

export const ProductReviewAndReplyContext =
  createContext<IReviewContext | null>(null);
