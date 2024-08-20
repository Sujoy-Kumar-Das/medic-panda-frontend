import { getUserInfo } from "@/services/actions/auth.service";
import Person2Icon from "@mui/icons-material/Person2";
import { Divider, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavUserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const isUserLoggedIn = getUserInfo();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {isUserLoggedIn ? (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          ) : (
            <Person2Icon />
          )}
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
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
        <Box sx={{ padding: 2 }}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton sx={{ p: 0 }}>
              {isUserLoggedIn ? (
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              ) : (
                <Person2Icon />
              )}
            </IconButton>
            <Box>
              <Typography component={"h6"} variant="h6">
                Sujoy Kumar Das
              </Typography>
              <Typography component={"p"} variant="body1">
                sujoykumardas75@gmail.com
              </Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 1 }} />

          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
}
export default NavUserMenu;
