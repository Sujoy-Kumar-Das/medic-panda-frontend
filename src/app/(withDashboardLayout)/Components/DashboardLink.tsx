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
  return (
    <ListItem
      component={Link}
      href={href}
      disablePadding
      sx={{
        justifyContent: "center",
        borderRadius: "12px",
        color: pathname === href ? "text.disabled" : "text.secondary",
        backgroundColor: pathname === href ? "primary.light" : "transparent",
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
            color: pathname === href ? "text.disabled" : "inherit",
            minWidth: 40,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: pathname === href ? "bold" : "normal",
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
