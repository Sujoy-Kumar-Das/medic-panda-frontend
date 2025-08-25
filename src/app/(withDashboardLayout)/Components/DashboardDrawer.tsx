import { useAuth } from "@/hooks/useAuth";
import dashboardRoutes from "@/routes/dashboard.routes";
import { IUserRoles } from "@/types/user.role.type";
import routeGenerator from "@/utils/route.generator";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardLink from "./DashboardLink";
import DashboardLogoutButton from "./DashboardLogoutButton";
export const DashboardDrawer = () => {
  const { user } = useAuth();

  const role = (user?.role as IUserRoles) || undefined;

  // Generate items
  const items = routeGenerator(dashboardRoutes, role);
  const pathname = usePathname(); // Get current pathname

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
          color="primary.contrastText"
          sx={{ letterSpacing: 1 }}
        >
          medic
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary.contrastText"
          sx={{ letterSpacing: 1 }}
        >
          Panda
        </Typography>
      </Box>

      {/* Navigation Links */}
      <List sx={{ px: { xs: 1, md: 1.5 } }}>
        {items.map((item) => (
          <DashboardLink
            key={item.link}
            href={item.link}
            icon={item.icon}
            pathname={pathname}
            text={item.text}
          />
        ))}

        <Divider sx={{ my: 1 }} />

        <DashboardLink
          href={"/"}
          icon={<HomeIcon />}
          text={"Back to Home"}
          pathname={pathname}
        />

        {user?.role === "user" && (
          <DashboardLink
            href={"/product"}
            icon={<LocalMallIcon />}
            text={"Shop"}
            pathname={pathname}
          />
        )}

        <ListItem disablePadding sx={{ mt: 2 }}>
          <DashboardLogoutButton />
        </ListItem>
      </List>
    </Box>
  );
};
