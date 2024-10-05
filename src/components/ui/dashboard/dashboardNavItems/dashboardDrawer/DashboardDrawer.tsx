import dashboardRoutes from "@/routes/dashboard.routes";
import logoutUser from "@/services/actions/logoutUser";
import routeGenerator from "@/utils/route.generator";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
export const DashboardDrawer = () => {
  // Generate items
  const items = routeGenerator(dashboardRoutes, "user");
  const pathname = usePathname(); // Get current pathname

  const router = useRouter();

  const handleLogout = () => {
    logoutUser(router);
    toast.success("User logout successfully");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 250,
        bgcolor: "background.default",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {/* Logo Section */}
      <Box
        component={Link}
        href="/"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          py: 2,
          backgroundColor: "primary.light",
          borderRadius: 0,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.secondary"
          sx={{ letterSpacing: 1 }}
        >
          medic
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.disabled"
          sx={{ letterSpacing: 1 }}
        >
          Panda
        </Typography>
      </Box>

      {/* Navigation Links */}
      <List sx={{ px: { xs: 1, md: 1.5 } }}>
        {items.map((item) => (
          <ListItem
            component={Link}
            href={item.link}
            key={item.link}
            disablePadding
            sx={{
              justifyContent: "center",
              borderRadius: "12px",
              color:
                pathname === item.link ? "text.disabled" : "text.secondary",
              backgroundColor:
                pathname === item.link ? "primary.light" : "transparent",
              my: 0.5,
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.light",
                color: "text.disabled",
              },
            }}
          >
            <ListItemButton
              sx={{
                justifyContent: "flex-start",
                textAlign: "left",
                width: "100%",
              }}
            >
              <ListItemIcon
                sx={{
                  color: pathname === item.link ? "text.disabled" : "inherit",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: pathname === item.link ? "bold" : "normal",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "left",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ my: 1 }} />
        <ListItem
          component={Link}
          href={"/"}
          disablePadding
          sx={{
            justifyContent: "center",
            borderRadius: "12px",
            color: pathname === "/" ? "text.disabled" : "text.secondary",
            backgroundColor: pathname === "/" ? "primary.light" : "transparent",
            my: 0.5,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.light",
              color: "text.disabled",
            },
          }}
        >
          <ListItemButton
            sx={{
              justifyContent: "flex-start",
              textAlign: "left",
              width: "100%",
            }}
          >
            <ListItemIcon
              sx={{
                color: pathname === "/" ? "text.disabled" : "inherit",
                minWidth: 40,
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Back To Home"}
              primaryTypographyProps={{
                fontWeight: pathname === "/" ? "bold" : "normal",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "left",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          component={Link}
          href={"/product"}
          disablePadding
          sx={{
            justifyContent: "center",
            borderRadius: "12px",
            color: pathname === "/product" ? "text.disabled" : "text.secondary",
            backgroundColor:
              pathname === "/product" ? "primary.light" : "transparent",
            my: 0.5,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.light",
              color: "text.disabled",
            },
          }}
        >
          <ListItemButton
            sx={{
              justifyContent: "flex-start",
              textAlign: "left",
              width: "100%",
            }}
          >
            <ListItemIcon
              sx={{
                color: pathname === "/product" ? "text.disabled" : "inherit",
                minWidth: 40,
              }}
            >
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Shop"}
              primaryTypographyProps={{
                fontWeight: pathname === "/product" ? "bold" : "normal",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "left",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={handleLogout}>
          <Button fullWidth startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
