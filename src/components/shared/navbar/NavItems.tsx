import { menuLinks } from "@/routes/nav.path";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function NavItems({ user }) {
  return (
    <>
      {menuLinks.map((item) => (
        <Typography
          key={item.link}
          href={item.link}
          component={Link}
          sx={{
            fontSize: "18px",
            color: "text.primary",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              color: "primary.main",
              textShadow: "0px 4px 10px rgba(0, 123, 255, 0.3)",
              transform: "scale(1.1)",
            },
          }}
        >
          {item.text}
        </Typography>
      ))}
      {!user && (
        <Typography
          href={"/register/login"}
          component={Link}
          sx={{
            fontSize: "18px",
            color: "text.primary",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              color: "primary.main",
              textShadow: "0px 4px 10px rgba(0, 123, 255, 0.3)",
              transform: "scale(1.1)",
            },
          }}
        >
          Login
        </Typography>
      )}
    </>
  );
}
