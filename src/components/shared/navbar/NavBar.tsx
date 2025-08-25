"use client";
import useToggleState from "@/hooks/useToggleState";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Logo from "../logo/Logo";
import NavBarCart from "./NavBarCart";
import NavItems from "./NavItems";
import NavUserMenu from "./NavUserMenu";
import NavSearchCompo from "./NavSearchCompo";

export default function NavBar() {
  // state for handle mobile responsiveness
  const { state, toggle } = useToggleState(false);

  return (
    <Box position={"sticky"} top={0} zIndex={1000} bgcolor="background.default">
      <Container sx={{ py: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Logo />

          {/* navigation items for large and medium devices */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={3}
            display={{ xs: "none", md: "flex" }}
          >
            <NavItems />
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
          >
            <NavSearchCompo />
            <NavBarCart />
            <NavUserMenu />
          </Stack>

          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              transition: "transform 0.3s ease",
              transform: `${state ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        {/* for responsive */}
        <Box
          component={"nav"}
          sx={{
            height: "100vh",
            width: "100%",
            bgcolor: "background.default",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1000,
            transform: `${state ? "translateY(0)" : "translateY(-100vh)"}`,
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
            <Logo />
            <IconButton onClick={toggle} sx={{ color: "primary.main" }}>
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
            {/* nav user menu  */}
            <NavUserMenu />

            {/* navigation items for small devices */}
            <Stack spacing={1} sx={{ textAlign: "center" }} onClick={toggle}>
              <NavItems />
            </Stack>

            <NavBarCart />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
