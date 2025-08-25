import { Verified } from "@mui/icons-material";
import { Box, Paper, Stack, Tooltip, Typography } from "@mui/material";
import UpdateUserImage from "./UpdateUserImage";

export default function UserInfoHeader({ user }: { user: any }) {
  return (
    <Paper
      sx={{
        padding: 4,
        backgroundColor: "primary.light",
        borderRadius: 3,
        color: "#ffffff",
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        marginBottom: 4,
        width: "100%",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Stack direction="row" alignItems="center" gap={3}>
        {/* Image with upload hover */}
        <UpdateUserImage photoLink={user?.photo} />

        {/* User Info */}
        <Box>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography
              variant="h4"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Welcome, {user?.name || "User"}!
            </Typography>
            {user?.user?.isVerified && (
              <Tooltip title="Verified">
                <Verified
                  sx={{
                    fontSize: 28,
                    color: "#007bff",
                    background: "#fff",
                    borderRadius: "50%",
                    padding: "2px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Tooltip>
            )}
          </Stack>
          <Typography variant="subtitle1" sx={{ textTransform: "none" }}>
            {user?.user?.email || "No Email Provided"}
          </Typography>
          <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
            {user?.user?.role || "N/A"}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
