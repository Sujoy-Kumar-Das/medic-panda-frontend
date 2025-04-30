import { useAuth } from "@/hooks/useAuth";
import navbarUserMenu from "@/routes/navbar-user-munu";
import { Box, Divider, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NavbarUserMenuCardProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  name: string;
  role: string;
  isVerified: boolean;
  email: string;
  photoUrl: string;
  isLoading: boolean;
}

export default function NavbarUserMenuCard({
  anchorEl,
  onClose,
  name,
  role,
  isVerified,
  email,
  photoUrl,
  isLoading,
}: NavbarUserMenuCardProps) {
  // get the navbar user menu item routers;
  const settings = navbarUserMenu(role);

  const { logoutUser } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    onClose();
    toast.success("Logout successful");
    logoutUser({ router });
  };

  return (
    <Menu
      sx={{
        mt: "45px",
        "& .MuiMenu-paper": {
          width: 300,
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          p: 2,
        },
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {isLoading ? (
        <Typography variant="body2" textAlign="center">
          Loading...
        </Typography>
      ) : (
        <Box>
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <Image
              alt="User Avatar"
              src={photoUrl}
              height={48}
              width={48}
              style={{
                borderRadius: "50%",
                border: `${
                  isVerified ? "2px solid #339aff" : "2px solid black"
                }`,
              }}
            />
            <Box>
              <Typography component="h6" variant="subtitle1" fontWeight={600}>
                {name}
              </Typography>
              <Typography component="p" variant="body2" color="text.secondary">
                {email}
              </Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 1 }} />

          {settings.map((setting) => (
            <MenuItem
              key={setting.link}
              component={Link}
              href={setting.link}
              onClick={onClose}
              sx={{
                borderRadius: 1,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "text.disabled",
                },
              }}
            >
              <Typography textAlign="left" sx={{ width: "100%" }}>
                {setting.text}
              </Typography>
            </MenuItem>
          ))}

          <MenuItem
            onClick={handleLogout}
            sx={{
              borderRadius: 1,
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.light",
                color: "text.disabled",
              },
            }}
          >
            <Typography textAlign="left" sx={{ width: "100%" }}>
              Logout
            </Typography>
          </MenuItem>
        </Box>
      )}
    </Menu>
  );
}
