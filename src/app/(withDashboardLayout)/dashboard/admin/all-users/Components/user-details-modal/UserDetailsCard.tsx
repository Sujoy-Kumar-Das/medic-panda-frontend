import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface UserDetailsCardProps {
  user: any;
}

const UserDetailsCard = ({ user }: UserDetailsCardProps) => {
  return (
    <Card
      sx={{
        mx: "auto",
        gap: 2,
        p: 3,
        width: "100%",
        maxWidth: 500,
        borderRadius: 2,
        height: "auto",
      }}
    >
      {/* User Image */}
      <Avatar
        sx={{ width: 100, height: 100, display: "flex", justifySelf: "center" }}
      >
        <Image
          src={user?.photo}
          alt={`${user?.name} image`}
          width={100}
          height={100}
        />
      </Avatar>

      {/* User Info */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          width: "100%",
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {user?.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          ID: {user?.user?._id}
        </Typography>

        {/* Verified Status */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <VerifiedIcon
            color={user?.user?.isVerified ? "success" : "disabled"}
          />
          <Typography
            variant="body2"
            color={user?.user?.isVerified ? "success.main" : "text.secondary"}
          >
            {user?.user?.isVerified ? "Verified" : "Unverified"}
          </Typography>
        </Box>

        {/* Email */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Email: {user?.user?.email || "Not provided"}
        </Typography>

        {/* Role */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Role: {user?.user?.role || "Not assigned"}
        </Typography>

        {/* Block Status */}
        <Box mt={2}>
          <Chip
            label={user?.user?.isBlocked ? "Blocked" : "Active"}
            color={user?.user?.isBlocked ? "error" : "success"}
            icon={user?.user?.isBlocked ? <BlockIcon /> : <CheckCircleIcon />}
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              borderRadius: 1,
            }}
          />
        </Box>
      </CardContent>

      <Divider sx={{ width: "100%", my: 2 }} />

      {/* Extra information  */}
      <Box sx={{ textAlign: "center", width: "100%", mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Account Created At:{" "}
          {user?.user?.createdAt
            ? new Date(user?.user.createdAt).toLocaleDateString()
            : "N/A"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated:{" "}
          {user?.user?.updatedAt
            ? new Date(user?.user.updatedAt).toLocaleDateString()
            : "N/A"}
        </Typography>
      </Box>
    </Card>
  );
};

export default UserDetailsCard;
