import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Card, Divider, Typography } from "@mui/material";

export default function ProductDetailedDescription({ text }: { text: string }) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: 3,
        mb: 4,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Box display="flex" alignItems="center" mb={3}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1.5,
            borderRadius: "50%",
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            mr: 2,
          }}
        >
          <DescriptionIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Description
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Box
        sx={{
          "& h1, & h2, & h3, & h4, & h5, & h6": {
            color: "text.primary",
            mt: 2,
            mb: 1,
          },
          "& p": {
            color: "text.secondary",
            lineHeight: 1.7,
            mb: 1.5,
          },
          "& ul, & ol": {
            pl: 3,
            mb: 2,
          },
          "& li": {
            mb: 0.5,
            color: "text.secondary",
          },
          "& strong": {
            color: "text.primary",
            fontWeight: 600,
          },
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Card>
  );
}
