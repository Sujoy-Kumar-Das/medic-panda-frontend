import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";
export default function DashboardItemCard() {
  return (
    <Card
      sx={{
        background: "linear-gradient(45deg, #2779F5 30%, #4A90E2 90%)",
        color: "background.default",
        display: "flex",
        alignItems: "center",
        gap: 1,
        padding: "20px",
      }}
    >
      <Inventory2Icon sx={{ fontSize: 50 }} />
      <Box>
        <Typography fontSize={24} fontWeight={"bold"}>
          Total Orders{" "}
        </Typography>
        <Typography
          component={Link}
          href={""}
          sx={{
            color: "background.default",
            fontWeight: "bold",
            fontSize: 20,
            textDecoration: "none",
          }}
        >
          View Details
        </Typography>
      </Box>
    </Card>
  );
}
