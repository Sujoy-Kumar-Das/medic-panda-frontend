import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface DashboardLinkProps {
  href: string;
  pathname: string;
  icon: ReactNode;
  text: string;
}

export default function DashboardLink({
  href,
  pathname,
  icon,
  text,
}: DashboardLinkProps) {
  const isActive = pathname === href;

  return (
    <ListItem
      component={Link}
      href={href}
      disablePadding
      sx={{
        borderRadius: "12px",
        my: 0.5,
        transition: "all 0.3s ease",
        backgroundColor: isActive ? "primary.light" : "transparent",
        "&:hover": {
          backgroundColor: "primary.light",
          "& .MuiListItemText-primary": {
            color: "primary.contrastText",
          },
          "& .MuiListItemIcon-root": {
            color: "primary.contrastText",
          },
        },
      }}
    >
      <ListItemButton
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          width: "100%",
          px: 2,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
            color: isActive ? "primary.contrastText" : "text.primary",
            transition: "color 0.3s ease",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "primary.contrastText" : "text.primary",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "left",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
