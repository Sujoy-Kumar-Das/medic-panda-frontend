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

// generate items
const items = routeGenerator(dashboardRoutes, "user");

export const DashboardDrawer = (
  <Box>
    <Box
      component={Link}
      href={"/"}
      sx={{ display: "flex", justifyContent: "center", textDecoration: "none" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
        <Typography
          component={"h1"}
          variant="h4"
          fontWeight={"bold"}
          color={"text.primary"}
        >
          medic
        </Typography>
        <Typography
          component={"h1"}
          variant="h4"
          fontWeight={"bold"}
          color={"primary"}
        >
          Panda
        </Typography>
      </Box>
    </Box>
    <Divider />
    <List>
      {items.map((item) => (
        <ListItem
          component={Link}
          href={item.link}
          key={item.link}
          disablePadding
          sx={{ color: "text.secondary" }}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </Box>
);
