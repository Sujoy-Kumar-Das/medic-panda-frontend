import { ProductReviewAndReplyContext } from "@/context/ProductReiewAndReply";
import { IReview } from "@/types";
import { ReactNode, useState } from "react";

interface IAction {
  show: string | undefined;
  add: string | undefined;
  edit: string | undefined;
}

export default function ProductReviewAndReplyContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // states for handle reply compo
  const [action, setAction] = useState<IAction>({
    show: undefined,
    add: undefined,
    edit: undefined,
  });

  const [activeReview, setActiveReview] = useState<IReview | undefined>(
    undefined
  );

  const handleChangeAction = (
    nextAction: Partial<IAction>,
    review: IReview | undefined
  ) => {
    setAction((prev) => ({ ...prev, ...nextAction }));
    setActiveReview(review);
  };

  const add = action.add;
  const edit = action.edit;

  return (
    <ProductReviewAndReplyContext.Provider
      value={{ add, edit, handleChangeAction, activeReview }}
    >
      {children}
    </ProductReviewAndReplyContext.Provider>
  );
}
