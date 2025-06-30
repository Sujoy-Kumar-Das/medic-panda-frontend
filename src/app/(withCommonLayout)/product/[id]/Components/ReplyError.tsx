import ErrorCard from "@/components/shared/error/ErrorCard";
import { IGenericErrorResponse } from "@/types";

interface ReplyErrorStateProps {
  error: unknown;
}

export default function ReplyError({ error }: ReplyErrorStateProps) {
  return <ErrorCard error={error as IGenericErrorResponse} />;
}
