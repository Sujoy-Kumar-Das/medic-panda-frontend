import { Typography } from "@mui/material";

export default function DescriptionHeader({ children }: { children: string }) {
  return (
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      sx={{
        fontWeight: "bold",
        color: "text.primary",
        mb: 3,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -8,
          left: 0,
          width: 60,
          height: 4,
          backgroundColor: "primary.main",
          borderRadius: 2,
        },
      }}
    >
      {children}
    </Typography>
  );
}
