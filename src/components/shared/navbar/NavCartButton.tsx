"use client";
import { useAuth } from "@/hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton, Typography } from "@mui/material";
export default function NavCartButton({
  cartItemLength,
  onOpen,
}: {
  cartItemLength: number;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  const { user } = useAuth();

  console.log("i am consoled,NavCartButton");
  return (
    <>
      {user ? (
        <>
          <Box position={"relative"}>
            <IconButton
              color="primary"
              onClick={onOpen}
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
              {cartItemLength >= 1 && (
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
                  {cartItemLength && cartItemLength}
                </Typography>
              )}
            </IconButton>
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
          onClick={onOpen}
        >
          My Cart{" "}
          {cartItemLength >= 1 && (
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
              {cartItemLength && cartItemLength}
            </Typography>
          )}
        </Button>
      )}
    </>
  );
}
