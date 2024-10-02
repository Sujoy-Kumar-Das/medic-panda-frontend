import logoutUser from "@/services/actions/logoutUser";
import Person2Icon from "@mui/icons-material/Person2";
import { Divider, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";

const settings = ["Profile", "Account", "Dashboard"];

function NavUserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const router = useRouter();

  const isUserLoggedIn = true;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logoutUser(router);
    handleCloseUserMenu();
  };

  return (
    <Box>
      <Tooltip title="Open settings">
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
          {isUserLoggedIn ? (
            <Avatar
              alt="User Avatar"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 40, height: 40 }}
            />
          ) : (
            <Person2Icon sx={{ fontSize: 40 }} />
          )}
        </IconButton>
      </Tooltip>

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
            <Avatar
              alt="User Avatar"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 48, height: 48 }}
            />
            <Box>
              <Typography component="h6" variant="subtitle1" fontWeight={600}>
                Sujoy Kumar Das
              </Typography>
              <Typography component="p" variant="body2" color="text.secondary">
                sujoykumardas75@gmail.com
              </Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 1 }} />

          {settings.map((setting) => (
            <MenuItem
              key={setting}
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
                {setting}
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
  );
}

export default NavUserMenu;
