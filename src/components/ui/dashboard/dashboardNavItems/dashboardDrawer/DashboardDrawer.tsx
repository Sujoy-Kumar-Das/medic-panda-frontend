import dashboardRoutes from "@/routes/dashboard.routes";
import routeGenerator from "@/utils/route.generator";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardDrawer = () => {
  // Generate items
  const items = routeGenerator(dashboardRoutes, "user");
  const pathname = usePathname(); // Get current pathname

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 250,
        bgcolor: "background.paper",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
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
          color="text.primary"
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
      <List sx={{ px: { xs: 0, md: 1 } }}>
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
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              <ListItemIcon
                sx={{
                  color: pathname === item.link ? "text.disabled" : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: pathname === item.link ? "bold" : "normal",
                  textAlign: "left",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Bottom Divider */}
      <Divider sx={{ borderColor: "divider", mt: "auto" }} />
    </Box>
  );
};
