import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function SubscribeSection() {
  return (
    <Box component="section" py={8} bgcolor="background.default">
      <Box maxWidth="md" mx="auto" px={2} textAlign="center">
        <Typography variant="h4" fontWeight="bold" color="text.primary" mb={2}>
          Stay Updated
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Get health tips, exclusive offers, and updates delivered to your inbox
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ maxWidth: 400, mx: "auto" }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <TextField
              type="email"
              fullWidth
              placeholder="Your email address"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "999px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "999px",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                borderRadius: "999px",
                boxShadow: 2,
                textTransform: "none",
                px: 4,
                fontWeight: 500,
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          mt={2}
          display="block"
        >
          We respect your privacy. Unsubscribe at any time.
        </Typography>
      </Box>
    </Box>
  );
}
