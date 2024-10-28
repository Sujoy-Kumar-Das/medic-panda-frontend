"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton, Typography } from "@mui/material";
import NavUserMenu from "./NavUserMenu";
export default function NavCartButton({
  user,
  dataLength,
  cartLength,
  handleOpenUserMenu,
}: {
  user: boolean;
  dataLength: number;
  cartLength: number;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <>
      {user ? (
        <>
          <Box position={"relative"}>
            <IconButton
              color="primary"
              onClick={handleOpenUserMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <ShoppingCartIcon />
              {dataLength >= 1 && (
                <Typography
                  color="common.white"
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -5,
                    bgcolor: "primary.main",
                    height: 24,
                    width: 24,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: 12,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  {dataLength}
                </Typography>
              )}
            </IconButton>
          </Box>

          <Box display={{ xs: "none", md: "flex" }}>
            <NavUserMenu />
          </Box>
        </>
      ) : (
        <Button
          variant="contained"
          endIcon={<ShoppingCartIcon />}
          sx={{
            boxShadow: "none",
            display: "flex",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
          onClick={handleOpenUserMenu}
        >
          My Cart{" "}
          {cartLength >= 1 && (
            <Typography
              color="common.white"
              sx={{
                position: "absolute",
                top: -10,
                right: -5,
                bgcolor: "primary.main",
                height: 24,
                width: 24,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 12,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {cartLength}
            </Typography>
          )}
        </Button>
      )}
    </>
  );
}
