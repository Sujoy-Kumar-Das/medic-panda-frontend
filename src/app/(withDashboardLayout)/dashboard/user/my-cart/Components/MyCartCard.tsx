import { ICart } from "@/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import MyCartCardGrid from "./MyCartCardGrid";

interface MyCartCardProps {
  cart: ICart;
  onDeleteCartItem: (id: string) => Promise<void>;
  isLoading: boolean;
}

export default function MyCartCard({
  cart,
  onDeleteCartItem,
  isLoading,
}: MyCartCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 4,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <MyCartCardGrid
        cart={cart}
        onDeleteCart={onDeleteCartItem}
        isLoading={isLoading}
      />

      <Button
        variant="contained"
        component={Link}
        href={`/dashboard/user/check-out/${cart._id}`}
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: { xs: 2, md: 0 },
          background: "primary.main",
          color: "white",
          paddingX: 4,
          paddingY: 1.5,
          fontWeight: 600,
          borderRadius: 3,
          whiteSpace: "nowrap",
          alignSelf: "center",
        }}
      >
        Check Out Now
      </Button>
    </Box>
  );
}
