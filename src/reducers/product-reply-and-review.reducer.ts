import { IReview } from "@/types";

// State type
export interface IProductReplyAndReview {
  show: string | null;
  add: string | null;
  edit: string | null;
  activeReview: IReview | null;
}

// Action type
export type ProductReplyAndReviewAction =
  | { type: "show"; payload: { id: string } }
  | { type: "add"; payload: { id: string } }
  | { type: "edit"; payload: { id: string } }
  | { type: "activeReview"; payload: { activeReview: IReview } }
  | { type: "clearShow" }
  | { type: "clearAdd" }
  | { type: "clearEdit" }
  | { type: "clearAll" };

// Initial state
export const productReplyAndReviewInitialValue: IProductReplyAndReview = {
  show: null,
  add: null,
  edit: null,
  activeReview: null,
};

// Reducer function
export const productReplyAndReviewReducer = (
  state: IProductReplyAndReview,
  action: ProductReplyAndReviewAction
): IProductReplyAndReview => {
  switch (action.type) {
    case "show":
      return { ...state, show: action.payload.id };

    case "add":
      return { ...state, add: action.payload.id };

    case "edit":
      return { ...state, edit: action.payload.id };

    case "activeReview":
      return { ...state, activeReview: action.payload.activeReview };

    case "clearShow":
      return { ...state, show: null };

    case "clearAdd":
      return { ...state, add: null };

    case "clearEdit":
      return { ...state, edit: null };

    case "clearAll":
      return {
        show: null,
        add: null,
        edit: null,
        activeReview: null,
      };

    default:
      return state;
  }
};
