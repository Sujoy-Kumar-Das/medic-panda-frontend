import { IReply } from "@/types";
import ReplyContainer from "./ReplyContainer";
import ReplyItem from "./ReplyItem";
import { IModifiedUserData } from "@/types/user.type";

interface ReplyListProps {
  replies: IReply[];
  user: IModifiedUserData | null;
  loadingIds: string[];
  onEditReply: (reply: IReply) => void;
  onDeleteReply: (id: string) => Promise<void>;
}

export default function ReplyList({
  replies,
  user,
  loadingIds,
  onEditReply,
  onDeleteReply,
}: ReplyListProps) {
  return (
    <ReplyContainer>
      {replies.map((reply) => (
        <ReplyItem
          key={reply._id}
          reply={reply}
          user={user}
          loadingIds={loadingIds}
          onEdit={() => onEditReply(reply)}
          onDelete={() => onDeleteReply(reply._id)}
        />
      ))}
    </ReplyContainer>
  );
}
