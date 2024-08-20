"use client";
import { menuLinks } from "@/routes/nav.path";
import { getUserInfo } from "@/services/actions/auth.service";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import NavBarCart from "./NavBarCart";
import NavUserMenu from "./NavUserMenu";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const user = getUserInfo() ? true : false;

  const navItems = (
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
          href={"register/login"}
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

  return (
    <Box position={"relative"} bgcolor="background.default">
      <Container sx={{ py: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box sx={{ display: "flex" }}>
            <Typography component={"h1"} variant="h4" fontWeight={"bold"}>
              Medic
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

          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={3}
            display={{ xs: "none", md: "flex" }}
          >
            {navItems}
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
          >
            <NavBarCart user={user} />
          </Stack>

          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              transition: "transform 0.3s ease",
              transform: `${mobileOpen ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        <Box
          component={"nav"}
          sx={{
            height: "100vh",
            width: "100%",
            bgcolor: "secondary.main",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1000,
            transform: `${mobileOpen ? "translateY(0)" : "translateY(-100vh)"}`,
            transition: "transform 0.5s ease-in-out",
            display: { xs: "block", md: "none" },
          }}
        >
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography component={"h1"} variant="h4" fontWeight={"bold"}>
                Medic
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
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
            mt={10}
          >
            <NavUserMenu />
            <Stack
              spacing={1}
              sx={{ textAlign: "center" }}
              onClick={handleDrawerToggle}
            >
              {navItems}
            </Stack>
            <NavBarCart user={user} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
