import NoDataFoundCard from "@/components/shared/notFound/NoDataFoundCard";

export default function NoReplyFound() {
  return (
    <NoDataFoundCard
      title="No Replies Yet"
      subtitle="Be the first to respond and join the conversation."
      sxProps={{
        marginTop: 3,
      }}
    />
  );
}
