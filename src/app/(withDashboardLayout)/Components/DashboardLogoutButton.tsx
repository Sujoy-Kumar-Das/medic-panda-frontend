"use client";
import { useAuth } from "@/hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DashboardLogoutButton() {
  const { logoutUser } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    logoutUser(router);
    toast.success("Logout successfully");
  };
  return (
    <Button
      onClick={handleLogout}
      variant="contained"
      fullWidth
      startIcon={<LogoutIcon />}
      sx={{
        padding: "10px 20px",
        fontWeight: "bold",
        borderRadius: "8px",
        backgroundColor: "#d32f2f",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#b71c1c",
        },
      }}
    >
      Logout
    </Button>
  );
}
