import { Box, Button, TextField } from "@mui/material";

export default function SubscribeNewsLetter() {
  return (
    <Box sx={{ display: "flex", gap: "2px", mb: 2 }}>
      <TextField
        placeholder="Subscribe to Newsletter"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fffff",
            },
            "&:hover fieldset": {
              borderColor: "#fffff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fffff",
            },
          },
          input: { color: "#fffff" },
        }}
      />
      <Button size="small">Subscribe</Button>
    </Box>
  );
}
