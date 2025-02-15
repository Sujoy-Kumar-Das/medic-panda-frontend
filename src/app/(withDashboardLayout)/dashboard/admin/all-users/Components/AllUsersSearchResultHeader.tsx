import { Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function AllUsersSearchResultHeader() {
  const searchParams = useSearchParams();

  const userEmail = searchParams.get("email");
  return (
    <>
      {userEmail && (
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            p: 2,
            bgcolor: "primary.light",
            color: "primary.contrastText",
            borderRadius: 2,
            boxShadow: 2,
            fontWeight: 500,
            textAlign: "center",
            mb: 2,
          }}
        >
          🔍 Search Result for <strong>{userEmail}</strong>
        </Typography>
      )}
    </>
  );
}
