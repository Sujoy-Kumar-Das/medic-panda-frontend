import { Card, CardContent, Typography } from "@mui/material";

export default function UserDashboardCard({
  card,
}: {
  title: string;
  value: number;
}) {
  return (
    <Card
      sx={{
        background: card.gradient,
        height: 150,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" align="center" color="white">
          {card.title}
        </Typography>
        <Typography variant="h4" fontWeight="bold" align="center" color="white">
          {card.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
