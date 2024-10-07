import { useGetMeQuery } from "@/redux/api/myProfile.api";
import logoutUser from "@/utils/logoutUser";
import Person2Icon from "@mui/icons-material/Person2";
import { Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserInfo } from "os";
import * as React from "react";
import { toast } from "sonner";

const settings = [
  { link: "/dashboard/user", text: "Profile" },
  { link: "/dashboard/", text: "Dashboard" },
];

function NavUserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { data: user } = useGetMeQuery(undefined);

  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logoutUser(router);
    handleCloseUserMenu();
    toast.success("Logout successful");
  };

  return (
    <>
      {user && (
        <Box>
          <>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {user?.user?.email ? (
                <Image
                  alt="User Avatar"
                  src={user?.photo}
                  height={40}
                  width={40}
                  style={{
                    borderRadius: "50%",
                    border: `${
                      user?.user?.isVerified
                        ? "2px solid #339aff"
                        : "2px solid black"
                    }`,
                  }}
                />
              ) : (
                <Person2Icon sx={{ fontSize: 40 }} />
              )}
            </IconButton>
          </>

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
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <Image
                  alt="User Avatar"
                  src={user?.photo}
                  height={48}
                  width={48}
                  style={{
                    borderRadius: "50%",
                    border: `${
                      user?.user?.isVerified
                        ? "2px solid #339aff"
                        : "2px solid black"
                    }`,
                  }}
                />
                <Box>
                  <Typography
                    component="h6"
                    variant="subtitle1"
                    fontWeight={600}
                  >
                    {user?.name}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="text.secondary"
                  >
                    {user?.user?.email}
                  </Typography>
                </Box>
              </Stack>
              <Divider sx={{ my: 1 }} />

              {settings.map((setting) => (
                <MenuItem
                  key={setting.link}
                  component={Link}
                  href={setting.link}
                  onClick={handleCloseUserMenu}
                  sx={{
                    borderRadius: 1,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "text.disabled",
                    },
                  }}
                >
                  <Typography textAlign="center" sx={{ width: "100%" }}>
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
                <Typography textAlign="center" sx={{ width: "100%" }}>
                  Logout
                </Typography>
              </MenuItem>
            </Box>
          </Menu>
        </Box>
      )}
    </>
  );
}

export default NavUserMenu;
