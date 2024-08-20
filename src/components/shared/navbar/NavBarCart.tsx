import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton } from "@mui/material";
import NavUserMenu from "./NavUserMenu";
export default function NavBarCart({ user }: { user: boolean }) {
  return (
    <>
      {user ? (
        <>
          <IconButton color="primary">
            <ShoppingCartIcon />
          </IconButton>
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
            display: { xs: "none", md: "flex" },
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          My Cart
        </Button>
      )}
    </>
  );
}
