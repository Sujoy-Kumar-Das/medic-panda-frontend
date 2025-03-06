import { Typography } from "@mui/material";

export default function UserInfo({ orderData }) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        User Info
      </Typography>
      <Typography variant="body2">
        <strong>Name:</strong> {orderData?.user?.name ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Email:</strong> {orderData?.user?.email ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Address:</strong> {orderData?.user?.address ?? "N/A"}
      </Typography>
    </>
  );
}
